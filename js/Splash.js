const splash = document.querySelector('.splashScreen');
const page = document.querySelector('.page');
const body = document.getElementsByTagName('body')[0];


document.addEventListener('DOMContentLoaded', (e) => {

    // altera cor do body para white(branco)
    body.style.backgroundColor = "white";
    //retira padding do body
    body.style.padding = "0px";

    //adiciona classe 'display-none' depois de 3960ms
    setTimeout(() => {
        splash.classList.add('display-none');
    }, 3960);

    //remove classe 'display-none' depois de 3961ms
    setTimeout(() => {
        page.classList.remove('display-none');
        body.classList.add('background-body')
    }, 3961);
})