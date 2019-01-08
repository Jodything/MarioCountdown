chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.insertCSS(null, {file: "src/style.css"});
	chrome.tabs.executeScript({
		code: 'Raptorize()'
	});
});