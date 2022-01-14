
// ******* Specific only For HOME section 



// Accordian Question
const accordianQuestion = document.getElementsByClassName('accordian__questions');
let i;

for (i = 0; i < accordianQuestion.length; i++) {

    accordianQuestion[i].addEventListener('click', function () {
        this.classList.toggle("active");
        const accordianAnswer = this.nextElementSibling;
        if (accordianAnswer.style.maxHeight) {
            accordianAnswer.style.maxHeight = null;
        } else {
            accordianAnswer.style.maxHeight = accordianAnswer.scrollHeight + "px";
        }
    });
}

