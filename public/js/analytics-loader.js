function loadAnalytics() {
	// 1) Global site tag (gtag.js) yükle
	var gtagScript = document.createElement('script');
	gtagScript.async = true;
	gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16795811620';
	document.head.appendChild(gtagScript);

	// 2) Config ve Conversion kodu yükle
	gtagScript.onload = function () {
		window.dataLayer = window.dataLayer || [];
		function gtag() { dataLayer.push(arguments); }
		window.gtag = gtag;

		gtag('js', new Date());
		gtag('config', 'AW-16795811620');
		gtag('event', 'conversion', {
			'send_to': 'AW-16795811620/38p5CJ-zh7waEKT-7sg-'
		});
	};
}

// Daha önce çerezler kabul edildiyse hemen çalıştır
if (localStorage.getItem('cookiesAccepted') === 'true') {
	loadAnalytics();
}
