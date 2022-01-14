// ******* COMMON for ALL Main section 

const navbarLinks = document.getElementById('navbar__links');
const hamburgerMenuButton = document.getElementById('hamburger__menu');
const topicDropdown = document.getElementById('topics');

const overlay = document.getElementById('nav__menu__overlay');



//  Close Menu section outside of  clicking  it 
window.onclick = function (e) {
    if (e.target.id !== 'navbar__links__inner' && e.target.id !== 'hamburger__menu' && e.target.id !== 'hamburger__menu__button' && e.target.id !== 'topics__link' && e.target.id !== 'navbar__links__inner__dropdown' && e.target.id !== 'react' && e.target.id !== 'css' && e.target.id !== 'blogs' && e.target.id !== 'python' && e.target.id !== 'cpp' && e.target.id !== 'blog__list__left' && e.target.id !== 'blog__list__button' && e.target.id !== 'blog__list__button__icon') {
        hamburgerMenuButton.classList.remove('active');
        navbarLinks.classList.remove('active');
        topicDropdown.classList.remove('active');
        overlay.classList.remove('active');
    }
}

// Hamburger Menu
hamburgerMenuButton.onclick = function () {
    hamburgerMenuButton.classList.toggle('active');
    navbarLinks.classList.toggle('active');
    overlay.classList.toggle('active');
}


// Drop down menu
topicDropdown.addEventListener('click', function () {
    topicDropdown.classList.toggle('active');

});



// Navbar On Scroll
let lastScrollPosition = 0;

navbarMain = document.getElementById('navbar__container');
window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollPosition) {
        navbarMain.style.top = '-70px';
    } else {
        navbarMain.style.top = '0px';
    }
    lastScrollPosition = scrollTop;

})

 

//  Icon to reach top 
const toTop = document.querySelector('.to__top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 150) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
});



// Preloader
const preLoader = document.getElementById('preloader');

window.addEventListener('load', () => {
  preLoader.classList.add('hide');
  document.body.classList.remove('preload');
})

