// cookie-consent.js
document.addEventListener('DOMContentLoaded', function () {
	const accepted = localStorage.getItem('cookiesAccepted');
	const rejected = localStorage.getItem('cookiesRejected');

	// Eğer ne kabul ne de ret varsa, modal’ı aç
	if (accepted !== 'true' && rejected !== 'true') {
		$('#cookieConsentModal').modal({
			backdrop: 'static',
			keyboard: false
		});
	} else if (accepted === 'true') {
		// Zaten kabul ettiyse betikleri yükle
		loadAnalytics();
	}

	// Kabul butonu
	document.getElementById('acceptCookies').addEventListener('click', function () {
		localStorage.setItem('cookiesAccepted', 'true');
		localStorage.removeItem('cookiesRejected');
		loadAnalytics();
		$('#cookieConsentModal').modal('hide');
	});

	// Reddet butonu
	document.getElementById('rejectCookies').addEventListener('click', function () {
		localStorage.setItem('cookiesRejected', 'true');
		localStorage.removeItem('cookiesAccepted');
		// Betikleri asla yükleme
		$('#cookieConsentModal').modal('hide');
	});
});
