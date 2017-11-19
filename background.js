function onInstalled() {
	createContextMenu()
	console.log("installed")
}

function createContextMenu() {
	chrome.contextMenus.create({
		title: "Get Thumbnail",
		id: "yttn",
		documentUrlPatterns: [
			"https://www.youtube.com/watch*",
			"https://www.youtube.com/channel/*",
			"https://www.youtube.com/user/*",
		]
	})
	chrome.contextMenus.create({ title: "MP3 Download", id: "mp3", documentUrlPatterns: ["https://www.youtube.com/watch*"] })
}

function launchScript(info, tab, scripts) {
	chrome.tabs.executeScript(null, {file: scripts[info.menuItemId]})
}

function contextMenuOnClickHandler(info, tab) {
	launchScript(info, tab, ctxMenuScripts)
}

function activateCmd(cmdSlug, ctxScripts) {
	var ctxScriptId = cmds[cmdSlug]
	var file = ctxScripts[ctxScriptId]
	chrome.tabs.executeScript(null, {file: file})
}

function cmdActivateHandler(cmdSlug) {
	activateCmd(cmdSlug, ctxMenuScripts)
}
function kissanimeVideoScript(tabId, changeInfo, tab) {
	if (/kissanime.[a-z]{2}\/anime\/.*\/\w*/gi.test(tab.url)) {
		chrome.tabs.executeScript(tabId, {file: 'kissanime.js'})
	} 
}
function desitvboxScript(tabId, changeInfo, tab) {
	if (/http:\/\/business-articles.me.*/gi.test(tab.url)) {
		chrome.tabs.executeScript(tabId, {file: 'desitvboxScript.js'})
	} 
}

/*================= SetUP =======================*/
// menu scripts that run on the event page
var cmds = {
	// which ctx menu script to run based on cmd and ctx menu script id
	'toggle-video-thumbnail': 'yttn',
	'toggle-mp3-download': 'mp3'
}

var ctxMenuScripts = {
	yttn: "getThumbnail.js",
	mp3: "mp3Download.js"
}

chrome.runtime.onInstalled.addListener(onInstalled);
chrome.tabs.onUpdated.addListener(kissanimeVideoScript)
chrome.tabs.onUpdated.addListener(desitvboxScript)
chrome.contextMenus.onClicked.addListener(contextMenuOnClickHandler);
chrome.commands.onCommand.addListener(cmdActivateHandler)