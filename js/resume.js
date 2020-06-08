//Numero aleatório
function getRandomNumber() {
    return Math.floor(Math.random() * 2);
}
//Alterando cor da pagina
function setRandomColor(numberColor) {
    if (numberColor == 1) {
        document.documentElement.style.setProperty('--primary-color-one', '#6BC1FF');
        document.documentElement.style.setProperty('--primary-color-two', '#108DE5');
        document.documentElement.style.setProperty('--primary-color-tree', '#1471B5');
        document.documentElement.style.setProperty('--primary-color-four', '#0B3F63');
    } else {
        document.documentElement.style.setProperty('--primary-color-one', '#6BFFA6');
        document.documentElement.style.setProperty('--primary-color-two', '#10E565');
        document.documentElement.style.setProperty('--primary-color-tree', '#14B554');
        document.documentElement.style.setProperty('--primary-color-four', '#0B632E');
    }
}
setRandomColor(getRandomNumber())

function validaEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        return true;
    } else {
        false;
    }
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        var email = document.getElementById('validationCustom02')
            // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false && validaEmail(email) == false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();





(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#sideNav'
    });

})(jQuery); // End of use strict