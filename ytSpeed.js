var v = document.querySelector('video');
var pbRateVar = 'yt-player-playback-rate';
var pbRate = JSON.parse(sessionStorage.getItem(pbRateVar));

v.playbackRate += 0.5;
pbRate.data = `${v.playbackRate}`;
sessionStorage.setItem(pbRateVar, JSON.stringify(pbRate));


// create playback speed overlay
var overlay = document.querySelector('.pb-speed-overlay');
if (!overlay) {
  var s = document.createElement('span');
  s.innerText = v.playbackRate
  s.style.background = 'black';
  s.style.color = 'red';
  s.style.position = 'fixed';
  s.className = 'pb-speed-overlay'
  
  // insert overlay
  var header = document.querySelector('ytd-masthead');
  header.insertBefore(s, header.firstChild);
} else {
  overlay.innerText = v.playbackRate;
}


console.log('speedup', v.playbackRate)