var params = new URLSearchParams(window.location.search);
var videoid = params.get('v');
var thumbURL = `https://i.ytimg.com/vi/${videoid}/maxresdefault.jpg`
window.open(thumbURL)
// chrome.runtime.sendMessage({url: thumbURL})
