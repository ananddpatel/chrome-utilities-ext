console.log('desitvbosScript.js LAUNCHED')
var iframes = document.querySelectorAll('iframe')
iframes.forEach(iframe => {
    if(iframe.src.indexOf('tvlogy') >= 0 || iframe.src.indexOf('dailymotion') >= 0) {
        window.location = iframe.src
    }
});