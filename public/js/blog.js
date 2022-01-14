
// ******* Specific only For BLOG section 


// Blog List button
const blogListButton = document.getElementById('blog__list__button');
const blogListSidebar = document.getElementById('blog__list__left');

blogListButton.addEventListener('click', () => {
    blogListSidebar.classList.toggle('active');
    blogListButton.classList.toggle('active');
});


//  Close Blog List outside of  clicking  it 
window.onclick = function (e) {
    if ( e.target.id !== 'blog__list__left' && e.target.id !== 'blog__list__button' && e.target.id !== 'blog__list__button__icon') {

        blogListSidebar.classList.remove('active');
        blogListButton.classList.remove('active');
    }
}



// Dark & Light Mode Toggle in BLOG section
const navBarLogoBlogSeries = document.getElementById('nav__logo');
const footerLogoBlogSeries = document.getElementById('footer__logo');


const colorSwitchBlogSeries = document.getElementById("theme__changer__blog");

colorSwitchBlogSeries.addEventListener("click", checkMode);


function checkMode() {
  if (colorSwitchBlogSeries.checked) {
    navBarLogoBlogSeries.src = '../../common_component_image/virtual-dom-logo-dark.svg';
    footerLogoBlogSeries.src = '../../common_component_image/virtual-dom-logo-dark-footer.svg';
    darkModeOn();
  } 
  else {
    navBarLogoBlogSeries.src = '../../common_component_image/virtual-dom-logo.svg';
    footerLogoBlogSeries.src = '../../common_component_image/virtual-dom-logo.svg';
    darkModeOff();
  }
}

function darkModeOn() {
  document.body.classList.add("dark__mode");
}

function darkModeOff() {
  document.body.classList.remove("dark__mode");
}

