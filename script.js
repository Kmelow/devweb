
setLandPageHeight = () => {
	// Get nav-bar height
	const navbarHeight = document.querySelector('.nav-bar').clientHeight;
	// Set landpage height
	let landpageGap = window.innerHeight - navbarHeight;
	if (landpageGap > 400) {
		document.querySelector('.land-page').style.height = landpageGap;
	} else {
		document.querySelector('.land-page').style.height = 400;
	}
}

setContactHeight = () => {
	// Get footer height
	const footerHeight = document.querySelector('.footer').clientHeight;
	// Set contact height
	let contactGap = window.innerHeight - footerHeight;
	if (contactGap > 650) {
		document.querySelector('.contact').style.height = contactGap;
	} else {
		document.querySelector('.contact').style.height = 650;
	}
}

setHeights = () => {
	setLandPageHeight();
	setContactHeight();
}

showNavbar = () => {
	// Get nav-bar height
	const navbarHeight = document.querySelector('.nav-bar').clientHeight;

	if (window.innerHeight - navbarHeight < window.scrollY) {
		// Add fixed navbar on top of page
	} else {
		// Remove navbar from top of page
	}
}

contactMe = () => {
	console.log('submit');
	
}

takeMeToProjects = () => {
	window.scrollTo(0, window.innerHeight);
}

takeMeToContacts = () => {
	window.scrollTo(0, document.body.scrollHeight);
}


// Event listeners
window.addEventListener('DOMContentLoaded', setHeights);
window.addEventListener('resize', setHeights);
window.addEventListener('scroll', showNavbar);
document.querySelector('#submit-lp').addEventListener('click', contactMe);
document.querySelector('#submit-c').addEventListener('click', contactMe);
document.querySelector('.fa-envelope').addEventListener('click', contactMe);
document.querySelector('.fa-briefcase').addEventListener('click', takeMeToProjects);
document.querySelector('.fa-address-card').addEventListener('click', takeMeToContacts);

