
// For Light & Dark Mode Main
const svgWaves = document.getElementById('svg__waves');

const navBarLogo = document.getElementById('nav__logo');
const footerLogo = document.getElementById('footer__logo');

const colorSwitch = document.getElementById("theme__changer");

colorSwitch.addEventListener("click", checkMode);


function checkMode() {
  if (colorSwitch.checked) {
    navBarLogo.src = 'common_component_image/virtual-dom-logo-dark.svg';
    footerLogo.src = 'common_component_image/virtual-dom-logo-dark-footer.svg';
    svgWaves.style.fill = '#1f1b24'
    darkModeOn();
  }
   
  else {
    navBarLogo.src = 'common_component_image/virtual-dom-logo.svg';
    footerLogo.src = 'common_component_image/virtual-dom-logo.svg';
    svgWaves.style.fill = '#fff'
    darkModeOff();
  }
}

function darkModeOn() {
  document.body.classList.add("dark__mode");
}

function darkModeOff() {
  document.body.classList.remove("dark__mode");
}

