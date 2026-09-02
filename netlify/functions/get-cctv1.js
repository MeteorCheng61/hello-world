// get-cctv1

exports.handler = async (event, context) => {
	const headers = event.headers || {};
	// 1. 判斷是否為瀏覽器網址列直接開啟 (Sec-Fetch-Dest: document)
	const isDirectBrowserAccess = headers['sec-fetch-dest'] === 'document';
	// 2. 判斷是否為同源/合法 Fetch 請求
	const fetchSite = headers['sec-fetch-site']; // same-origin, same-site, cross-site 等
	// 若為直接開啟，或不是透過 fetch/xhr 發起，拒絕存取
	if (isDirectBrowserAccess) {
		return {
		  statusCode: 403,
		  headers: { "Content-Type": "text/plain; charset=utf-8" },
		  body: "403 Forbidden: Direct access is not allowed."
		};
	}

		const All_Data = {
			"國道1號": {
				"南崁 - 竹北": [
					{ title: "48K+595 南\n泰山轉接道-機場系統", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=14850", link: "https://www.twipcam.com/cam/n1b-s-48k-595",lon: "121.300821488545",lat: "25.0401041086768",locationMiles: "48.595" },
					{ title: "48K+043 北\n機場系統-泰山轉接道", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=14800", link: "https://www.twipcam.com/cam/n1b-n-48k-043",lon: "121.306525330578",lat: "25.0422044531739",locationMiles: "48.043" },

					{ title: "50K+022 南\n泰山轉接道-機場系統", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=15000", link: "https://www.twipcam.com/cam/n1b-s-50k-022",lon: "121.289553301938",lat: "25.032948145601",locationMiles: "50.022" },
					{ title: "50K+571 北\n機場系統-泰山轉接道", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=15050", link: "https://www.twipcam.com/cam/n1b-n-50k-571",lon: "121.285273543452",lat: "25.0287984974398",locationMiles: "50.571" },

					{ title: "51K+380 南\n桃園-機場系統", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=15130", link: "https://www.twipcam.com/cam/n1-s-51k-380",lon: "121.280146644244",lat: "25.0247373473685",locationMiles: "51.380" },
					{ title: "51K+766 北\n機場系統-泰山轉接道", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=15170", link: "https://www.twipcam.com/cam/n1b-n-51k-766",lon: "121.277393098253",lat: "25.0217973053596",locationMiles: "51.766" },

					{ title: "53K+710 南\n機場系統-中壢轉接一", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=15370", link: "https://www.twipcam.com/cam/n1b-s-53k-710",lon: "121.262466180474",lat: "25.0105904209109",locationMiles: "53.710" },
					{ title: "54K+323 北\n中壢轉接一-機場系統", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=15430", link: "https://www.twipcam.com/cam/n1b-n-54k-323",lon: "121.258346440082",lat: "25.0066508171917",locationMiles: "54.323" },

					{ title: "56K+770 南\n機場系統-中壢轉接一", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=15670", link: "https://www.twipcam.com/cam/n1b-s-56k-770",lon: "121.240349780017",lat: "24.9917357477833",locationMiles: "56.770" },
					{ title: "56K+585 北\n中壢轉接一-機場系統", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=15650", link: "https://www.twipcam.com/cam/n1b-n-56k-585",lon: "121.242087867078",lat: "24.9927675170176",locationMiles: "56.585" },

					{ title: "58K+793 南\n中壢轉接一-中豐", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=15871", link: "https://www.twipcam.com/cam/n1b-s-58k-793",lon: "121.226285290564",lat: "24.9785708842224",locationMiles: "58.793" },
					{ title: "58K+783 北\n中豐-中壢轉接一", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=15870", link: "https://www.twipcam.com/cam/n1b-n-58k-783",lon: "121.22675454812",lat: "24.9785600673766",locationMiles: "58.783" },

					{ title: "60K+200 南\n中豐-中壢轉接二", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=16020", link: "https://www.twipcam.com/cam/n1b-s-60k-200",lon: "121.216143859537",lat: "24.9699523562029",locationMiles: "60.200" },
					{ title: "60K+200 北\n中壢轉接二-中豐", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=16021", link: "https://www.twipcam.com/cam/n1b-n-60k-200",lon: "121.216645348784",lat: "24.9699757640548",locationMiles: "60.200" },

					{ title: "61K+100 南\n中壢轉接二-校前路", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=16110", link: "https://www.twipcam.com/cam/n1b-s-61k-100",lon: "121.208818724769",lat: "24.9645621393224",locationMiles: "61.100" },
					{ title: "61K+708 北\n校前路-中壢轉接二", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=16170", link: "https://www.twipcam.com/cam/n1b-n-61k-708",lon: "121.205347810403",lat: "24.9617614274679",locationMiles: "61.708" },

					{ title: "63K+045 南\n中壢轉接二-校前路", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=16300", link: "https://www.twipcam.com/cam/n1b-s-63k-045",lon: "121.196357441687",lat: "24.9520048800703",locationMiles: "63.045" },
					{ title: "63K+265 北\n校前路-中壢轉接二", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=16320", link: "https://www.twipcam.com/cam/n1b-n-63k-265",lon: "121.19612014911",lat: "24.9502556516288",locationMiles: "63.265" },

					{ title: "64K+000 南\n中壢-平鎮系統", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=16400", link: "https://www.twipcam.com/cam/n1-s-64k-000",lon: "121.193929894479",lat: "24.9437069282639",locationMiles: "64.000" },
					{ title: "64K+360 北\n平鎮系統-中壢", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=16430", link: "https://www.twipcam.com/cam/n1b-n-64k-360",lon: "121.193369973946",lat: "24.9406331948804",locationMiles: "64.360" },

					{ title: "65K+024 南\n中壢轉接二-校前路", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=16501", link: "https://www.twipcam.com/cam/n1b-s-65k-024",lon: "121.188936607445",lat: "24.935966920739",locationMiles: "65.024" },
					{ title: "65K+000 北\n幼獅-平鎮系統", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=16500", link: "https://www.twipcam.com/cam/n1-n-65k-000",lon: "121.190265264309",lat: "24.9353678965988",locationMiles: "65.000" },

					{ title: "65K+920 南\n平鎮系統-幼獅", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=16590", link: "https://www.twipcam.com/cam/n1-s-65k-920",lon: "121.181858",lat: "24.931447",locationMiles: "65.920" },
					{ title: "65K+500 北\n校前路-中壢轉接二", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=16550", link: "https://www.twipcam.com/cam/n1b-n-65k-500",lon: "121.186318395188",lat: "24.9328836223261",locationMiles: "65.500" },

					{ title: "67K+000 南\n中壢轉接二-校前路", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=16700", link: "https://www.twipcam.com/cam/n1b-s-67k-000",lon: "121.171993043748",lat: "24.9264459978317",locationMiles: "67.000" },
					{ title: "67K+000 北\n校前路-中壢轉接二", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=16701", link: "https://www.twipcam.com/cam/n1b-n-67k-000",lon: "121.173668103468",lat: "24.9270314681164",locationMiles: "67.000" },

					{ title: "68K+340 南\n中壢轉接二-校前路", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=16830", link: "https://www.twipcam.com/cam/n1b-s-68k-340",lon: "121.16668857435",lat: "24.9161386099624",locationMiles: "68.340" },
					{ title: "69K+500 北\n校前路-中壢轉接二", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=16950", link: "https://www.twipcam.com/cam/n1b-n-69k-500",lon: "121.16309866276",lat: "24.9058457236362",locationMiles: "69.500" },

					{ title: "70K+500 南\n校前路-楊梅端", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=17051", link: "https://www.twipcam.com/cam/n1b-s-70k-500",lon: "121.154533208497",lat: "24.9014343354432",locationMiles: "70.500" },
					{ title: "70K+150 北\n高架楊梅端-楊梅", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=17010", link: "https://www.twipcam.com/cam/n1-n-70k-150",lon: "121.158208487916",lat: "24.9022932658399",locationMiles: "70.150" },

					{ title: "71K+000 南\n楊梅端-楊梅休息站", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=17140", link: "https://www.twipcam.com/cam/n1b-s-71k-000",lon: "121.146301302019",lat: "24.8993930000157",locationMiles: "71.000" },
					{ title: "71K+900 北\n湖口-高架楊梅端", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=17190", link: "https://www.twipcam.com/cam/n1-n-71k-900",lon: "121.141641488837",lat: "24.8976722866542",locationMiles: "71.900" },

					{ title: "72K+675 南\n高架楊梅端-湖口", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=17260", link: "https://www.twipcam.com/cam/n1-s-72k-675",lon: "121.134362035068",lat: "24.8959075408124",locationMiles: "72.675" },
					{ title: "73K+950 北\n湖口-高架楊梅端", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=17390", link: "https://www.twipcam.com/cam/n1-n-73k-950",lon: "121.122061984473",lat: "24.8929847712074",locationMiles: "73.950" },

					{ title: "78K+600 南\n高架楊梅端-湖口", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=17860", link: "https://www.twipcam.com/cam/n1-s-78k-600",lon: "121.07808700366",lat: "24.8840622977995",locationMiles: "78.600" },
					{ title: "79K+850 北\n湖口-高架楊梅端", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=17980", link: "https://www.twipcam.com/cam/n1-n-79k-850",lon: "121.06768331731",lat: "24.8783685086336",locationMiles: "79.850" },

					{ title: "82K+020 南\n高架楊梅端-湖口", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=18200", link: "https://www.twipcam.com/cam/n1-s-82k-020",lon: "121.046711934978",lat: "24.8767808282936",locationMiles: "82.020" },
					{ title: "81K+100 北\n湖口-高架楊梅端", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=18110", link: "https://www.twipcam.com/cam/n1-n-81k-100",lon: "121.055774013345",lat: "24.8759695587227",locationMiles: "81.100" },

					{ title: "86K+090 南\n湖口-湖口服務區", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=18602", link: "https://www.twipcam.com/cam/n1-s-86k-090",lon: "121.011854665565",lat: "24.8634589320427",locationMiles: "86.090" },
					{ title: "86K+000 北\n湖口服務區-湖口", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=18600", link: "https://www.twipcam.com/cam/n1-n-86k-000",lon: "121.011851100303",lat: "24.8622701293522",locationMiles: "86.000" },

					{ title: "87K+050 南\n湖口服務區-竹北", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=18700", link: "https://www.twipcam.com/cam/n1-s-87k-050",lon: "121.011719192066",lat: "24.854909184886",locationMiles: "87.050" },
					{ title: "87K+490 北\n竹北-湖口服務區", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=18740", link: "https://www.twipcam.com/cam/n1-n-87k-490",lon: "121.015000084042",lat: "24.8521077730511",locationMiles: "87.490" },

					{ title: "88K+590 南\n湖口服務區-竹北", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=18850", link: "https://www.twipcam.com/cam/n1-s-88k-590",lon: "121.021456868119",lat: "24.8446587382532",locationMiles: "88.590" },
					{ title: "89K+300 北\n竹北-湖口服務區", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=18930", link: "https://www.twipcam.com/cam/n1-n-89k-300",lon: "121.022492635631",lat: "24.8381453007532",locationMiles: "89.300" },

					{ title: "91K+000 南\n竹北-新竹", dir: "南", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=19101", link: "https://www.twipcam.com/cam/n1-s-91k-000",lon: "121.017210341628",lat: "24.8238499411533",locationMiles: "91.000" },
					{ title: "90K+470 北\n竹北-湖口服務區", dir: "北", src: "https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=19040", link: "https://www.twipcam.com/cam/n1-n-90k-470",lon: "121.020098043065",lat: "24.8282095863834",locationMiles: "90.470" },
				],
			},
		};

	return {
		statusCode: 200,
		headers: {
		  "Content-Type": "application/json",
		  "Access-Control-Allow-Origin": "*"
		},
		body: JSON.stringify(All_Data)
	};
};
