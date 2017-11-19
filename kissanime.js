var quality = document.getElementById('slcQualix')

// select the highest quality
quality.childNodes[1].selected = true;
// this doesnt work for somereason b/c video src doesnt reload, probably has to do something with the bubbling feature
// you have to manually click the quality but if logged in, select default as highest quality to load it

vidUrl = document.getElementById('my_video_1_html5_api').src

window.location = vidUrl