// console.log('@@@@@@@@@@@@')
// var userHeader = document.getElementById('watch7-user-header')
// tnContainer = document.createElement('div')
// tnContainer.setAttribute('id', 'tnContainer')
// if (userHeader) {

	// var button = document.createElement('input')
	// button.setAttribute('type', 'button')
	// button.setAttribute('value', 'thumbnail')
	// button.setAttribute('style', '{margin-left: 10px;}')
	// button.setAttribute('id', 'tn-btn')

	// userHeader.appendChild(button)
	// window.alert('text')
// }

// setTimeout(() => {window.alert(document.getElementById('watch7-user-header') ? true:false)}, 3000)

// setTimeout(function() {
	// window.open(thumbURL)
	// document.querySelector('#tn-btn') = 'hello'
	var userHeader = document.getElementById('watch7-user-header')
	var button = document.createElement('input')
	button.setAttribute('type', 'button')
	button.setAttribute('value', 'thumbnail')
	button.setAttribute('style', '{margin-left: 10px;}')
	button.setAttribute('id', 'tn-btn')

	var thumbURL = document.querySelectorAll("meta[property]")[3].content;
	console.log(thumbURL)
	button.addEventListener('click', ()=>{window.open(thumbURL)})
	
	userHeader.appendChild(button)
// }, 5000)
// 
// var h1 = document.createElement('h1')
// h1.innerHTML = "Hello"
