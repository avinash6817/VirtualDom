// ******* Specific only For JAVASCRIPT section 


// Dark & Light Mode Toggle in JS section
const navBarLogoJsSeries = document.getElementById('nav__logo');
const footerLogoJsSeries = document.getElementById('footer__logo');


const colorSwitchJsSeries = document.getElementById("theme__changer__js");

colorSwitchJsSeries.addEventListener("click", checkMode);


function checkMode() {
  if (colorSwitchJsSeries.checked) {
    navBarLogoJsSeries.src = '../../common_component_image/virtual-dom-logo-dark.svg';
    footerLogoJsSeries.src = '../../common_component_image/virtual-dom-logo-dark-footer.svg';
    darkModeOn();
  } else {
    navBarLogoJsSeries.src = '../../common_component_image/virtual-dom-logo.svg';
    footerLogoJsSeries.src = '../../common_component_image/virtual-dom-logo.svg';
    darkModeOff();
  }
}

function darkModeOn() {
  document.body.classList.add("dark__mode");
}

function darkModeOff() {
  document.body.classList.remove("dark__mode");
}



// Clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text);

  const toastMessage = document.createElement('div');
  toastMessage.classList.add('toast__message');
  toastMessage.innerText = 'Code Copied !'

  toastMessage.classList.add('active');
  
  document.body.appendChild(toastMessage);

  setTimeout(() => {
    toastMessage.classList.remove('active');
  }, 2500)

  setTimeout(() => {
    document.body.removeChild(toastMessage);
  }, 2800)

}

// const messg = 'code has been copied successfully';
// console.log(`your ${messg}`);
