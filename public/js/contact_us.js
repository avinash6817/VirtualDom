// ******* Specific only For CONTACT_US section 


// Dark & Light Mode Toggle in JS section
const navBarLogoContact = document.getElementById('nav__logo');
const footerLogoContact = document.getElementById('footer__logo');


const colorSwitchContact = document.getElementById("theme__changer__contact");

colorSwitchContact.addEventListener("click", checkMode);


function checkMode() {
  if (colorSwitchContact.checked) {
    navBarLogoContact.src = 'common_component_image/virtual-dom-logo-dark.svg';
    footerLogoContact.src = 'common_component_image/virtual-dom-logo-dark-footer.svg';
    darkModeOn();
  } 
  else {
    navBarLogoContact.src = 'common_component_image/virtual-dom-logo.svg';
    footerLogoContact.src = 'common_component_image/virtual-dom-logo.svg';
    darkModeOff();
  }
}

function darkModeOn() {
  document.body.classList.add("dark__mode");
}

function darkModeOff() {
  document.body.classList.remove("dark__mode");
}



