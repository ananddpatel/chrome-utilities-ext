var s = document.createElement('span');
s.innerText = JSON.parse(sessionStorage.getItem('yt-player-playback-rate')).data
s.style.background = 'black';
s.style.color = 'red';
s.style.position = 'fixed';
$('ytd-masthead').insertBefore(s, $('ytd-masthead').firstChild);