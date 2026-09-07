const https = require('https');

// GitHub API 通用請求工具
function githubRequest(path, method, data, token) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: path,
      method: method,
      headers: {
        'User-Agent': 'Netlify-Function',
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          resolve({ statusCode: res.statusCode, body: JSON.parse(body) });
        } catch (e) {
          resolve({ statusCode: res.statusCode, body });
        }
      });
    });

    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

// 讀取 datas.txt
async function getFileData(repo, token) {
  const path = `/repos/${repo}/contents/netlify/functions/datas.txt`;
  const res = await githubRequest(path, 'GET', null, token);
  if (res.statusCode !== 200) throw new Error('無法讀取數據檔案');
  
  const content = Buffer.from(res.body.content, 'base64').toString('utf-8');
  const sha = res.body.sha;
  const users = content.trim() ? JSON.parse(content) : [];
  return { users, sha };
}

// 寫入 datas.txt
async function saveFileData(repo, token, users, sha, commitMsg) {
  const path = `/repos/${repo}/contents/netlify/functions/datas.txt`;
  const contentBase64 = Buffer.from(JSON.stringify(users, null, 2)).toString('base64');
  
  const payload = {
    message: commitMsg,
    content: contentBase64,
    sha: sha
  };
  
  const res = await githubRequest(path, 'PUT', payload, token);
  if (res.statusCode !== 200 && res.statusCode !== 201) {
    throw new Error('更新 GitHub 檔案失敗');
  }
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ message: 'Method Not Allowed' }) };
  }

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const GITHUB_REPO = process.env.GITHUB_REPO;

  if (!GITHUB_TOKEN || !GITHUB_REPO) {
    return { statusCode: 500, body: JSON.stringify({ message: '伺服器未設定 GitHub Token 或 Repo' }) };
  }

  try {
    const { action, username, password, email } = JSON.parse(event.body || '{}');
    const { users, sha } = await getFileData(GITHUB_REPO, GITHUB_TOKEN);

    // 1. 登入 (Login)
    if (action === 'login') {
      const user = users.find(u => u.username === username && u.password === password);
      if (!user) {
        return { statusCode: 401, body: JSON.stringify({ message: '帳號或密碼錯誤' }) };
      }
      return { statusCode: 200, body: JSON.stringify({ message: '登入成功', user }) };
    }

    // 2. 註冊 (Register)
    if (action === 'register') {
      if (users.some(u => u.username === username)) {
        return { statusCode: 400, body: JSON.stringify({ message: '帳號已被註冊' }) };
      }
      
      const today = new Date().toISOString().split('T')[0];
      const validUntil = new Date(Date.now() + 365 * 86400000).toISOString().split('T')[0]; // 預設 1 年有效期

      const newUser = {
        username,
        password,
        email,
        register_date: today,
        validate_date: validUntil
      };

      users.push(newUser);
      await saveFileData(GITHUB_REPO, GITHUB_TOKEN, users, sha, `新增用戶: ${username}`);
      return { statusCode: 200, body: JSON.stringify({ message: '註冊成功' }) };
    }

    // 3. 忘記密碼 (Forgot Password)
    if (action === 'forgot') {
      const user = users.find(u => u.username === username && u.email === email);
      if (!user) {
        return { statusCode: 404, body: JSON.stringify({ message: '帳號與 Email 不匹配' }) };
      }
      return { statusCode: 200, body: JSON.stringify({ message: `您的密碼為：${user.password}` }) };
    }

    // 4. 刪除帳戶 (Delete Account)
    if (action === 'delete') {
      const index = users.findIndex(u => u.username === username && u.password === password);
      if (index === -1) {
        return { statusCode: 401, body: JSON.stringify({ message: '帳號或密碼驗證失敗，無法刪除' }) };
      }

      users.splice(index, 1);
      await saveFileData(GITHUB_REPO, GITHUB_TOKEN, users, sha, `刪除用戶: ${username}`);
      return { statusCode: 200, body: JSON.stringify({ message: '帳戶已成功刪除' }) };
    }

    return { statusCode: 400, body: JSON.stringify({ message: '無效的操作指令' }) };

  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ message: err.message || '伺服器錯誤' }) };
  }
};