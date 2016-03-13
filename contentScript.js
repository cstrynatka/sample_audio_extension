var regexDonaldTrump = /Donald Trump/;
var regexTrump = /Trump/;

function isDonaldTrumpArticle() {
	return regexDonaldTrump.test(document.title) ||
		(regexTrump.test(document.title) && regexDonaldTrump.test(document.body.textContent));
}

window.onbeforeunload = function(e) {
	// alert("unload");
	if (isDonaldTrumpArticle()) {
		chrome.extension.sendMessage({
			action: "stop"
		});
	}
}

document.onreadystatechange = function(e) {
	// alert("readyState");
	if (document.readyState === 'complete') {
		if (isDonaldTrumpArticle()) {
			chrome.extension.sendMessage({
				action: "play"
			});
		}
	}
};

document.onload = function(e) {
	// alert("readyState");
	if (isDonaldTrumpArticle()) {
		chrome.extension.sendMessage({
			action: "play"
		});
	}
};