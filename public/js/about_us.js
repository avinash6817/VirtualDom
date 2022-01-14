// ******* Specific only For ABOUT_US section 


// Dark & Light Mode Toggle in JS section
const navBarLogoAbout = document.getElementById('nav__logo');
const footerLogoAbout = document.getElementById('footer__logo');


const colorSwitchAbout = document.getElementById("theme__changer__about");

colorSwitchAbout.addEventListener("click", checkMode);


function checkMode() {
  if (colorSwitchAbout.checked) {
    navBarLogoAbout.src = 'common_component_image/virtual-dom-logo-dark.svg';
    footerLogoAbout.src = 'common_component_image/virtual-dom-logo-dark-footer.svg';
    darkModeOn();
  } 
  else {
    navBarLogoAbout.src = 'common_component_image/virtual-dom-logo.svg';
    footerLogoAbout.src = 'common_component_image/virtual-dom-logo.svg';
    darkModeOff();
  }
}

function darkModeOn() {
  document.body.classList.add("dark__mode");
}

function darkModeOff() {
  document.body.classList.remove("dark__mode");
}


