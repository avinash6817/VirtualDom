

// Dark & Light Mode Toggle in css section
const navBarLogoCssSeries = document.getElementById('nav__logo');
const footerLogoCssSeries = document.getElementById('footer__logo');


const colorSwitchCssSeries = document.getElementById("theme__changer__css");

colorSwitchCssSeries.addEventListener("click", checkMode);


function checkMode() {
  if (colorSwitchCssSeries.checked) {
    navBarLogoCssSeries.src = '../../common_component_image/virtual-dom-logo-dark.svg';
    footerLogoCssSeries.src = '../../common_component_image/virtual-dom-logo-dark-footer.svg';
    darkModeOn();
  } else {
    navBarLogoCssSeries.src = '../../common_component_image/virtual-dom-logo.svg';
    footerLogoCssSeries.src = '../../common_component_image/virtual-dom-logo.svg';
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