const splash = document.querySelector('.splashScreen');
const page = document.querySelector('.page');
const header = document.querySelector("header");
const body = document.querySelector("#body");
document.addEventListener('DOMContentLoaded', (e) => {

    // altera cor do body para white(branco)
    document.getElementById("body").style.backgroundColor = "white";
    //retira padding do body
    document.getElementById("body").style.padding = "0px";


    //adiciona classe 'display-none' depois de 3960ms
    setTimeout(() => {
        splash.classList.add('display-none');
    }, 3960);

    //remove classe 'display-none' depois de 3961ms
    setTimeout(() => {
        page.classList.remove('display-none');
        header.classList.remove('display-none');

        // document.getElementById("body").style.backgroundImage = "url('../assets/img/ImageCSharp.png')";
        // document.getElementById("body").style. = "60%";
    }, 3961);
})