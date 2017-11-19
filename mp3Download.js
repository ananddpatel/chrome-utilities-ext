console.log('mp3Download.js reporting in!')

var ytURL = window.location.href

////////////////
// IFRAME API //
////////////////

// <iframe style="width:230px;height:60px;border:0;overflow:hidden;" scrolling="no" src="//www.youtubeinmp3.com/widget/button/?video=https://www.youtube.com/watch?v=xyL_sf78H8A">
// <iframe style="width:100%;min-width:200px;max-width:350px;height:57px;border:0;overflow:hidden;" scrolling="no" src="//break.tv/widget/button/?link=https://www.youtube.com/watch?v=i62Zjga8JOM&color=DA4453&text=fff"></iframe>
// var iframe = document.createElement('iframe')
// var base = '//break.tv/widget/button/?link='
// var base = '//www.youtubeinmp3.com/widget/button/?video='
// iframe.setAttribute('src', base + ytURL)
// iframe.setAttribute('style', 'width:100px;height:15px;border:0;overflow:hidden;margin:0px 5px;')
// iframe.setAttribute('style', 'width:100%;min-width:200px;max-width:350px;height:57px;border:0;overflow:hidden;')
// iframe.setAttribute('scrolling', 'no')


////////////////////
// ANCHOR TAG API //
////////////////////

var script = document.createElement('script')
script.setAttribute('type', 'text/javascript')
script.setAttribute('src', 'https://ycapi.org/js/link.js')
// script.setAttribute('src', 'https://ytmp3.cc/js/converter-0.2.1.js')
document.body.append(script)

var dlLink = document.createElement('a')
dlLink.innerHTML = 'Download'
// var base = '//www.youtubeinmp3.com/fetch/?video='
dlLink.setAttribute('href', ytURL)
dlLink.setAttribute('target', '_blank')
dlLink.setAttribute('rel', 'nofollow')
dlLink.setAttribute('class', 'y2m yt-uix-button yt-uix-button-subscribe-branded')
dlLink.setAttribute('style', 'margin-left: 5px; padding: 4.5px 5px')


document.getElementById('watch7-user-header').appendChild(dlLink)
// document.getElementById('watch7-user-header').appendChild(iframe)