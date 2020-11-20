const hamburger = document.querySelector('.header1 .nav-bar1 .nav-list1 .hamburger');
const mobile_menu = document.querySelector('.header1 .nav-bar1 .nav-list1 ul');
const menu_item = document.querySelectorAll('.header1 .nav-bar1 .nav-list1 ul li a');
const header = document.querySelector('.header1.container1');
const showImages = document.getElementById('showImages');
const ImagsEvent = document.getElementById('ImagsEvent');
let flag = 0;
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header1.style.backgroundColor = '#29323c';
	} else {
		header1.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
showImages.addEventListener('click',function(){
	if (flag == 0){
		ImagsEvent.style.height = '500px';
		flag = 1;
	} else{
		ImagsEvent.style.height = '0px';
		flag = 0;
	}
})
