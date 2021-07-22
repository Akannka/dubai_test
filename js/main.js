$(function () {
    $(window).scroll(function () {
        $('#offers .grid-element-1').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInLeft");

            }
        });
    });
    $(window).scroll(function () {
        $('#offers .grid-element-2').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInRight");

            }
        });
    });
    $(window).scroll(function () {
        $('#offers .grid-element-3-1').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInDown");

            }
        });
    });
    $(window).scroll(function () {
        $('#offers .grid-element-3-2').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInUp");

            }
        });
    });
    $(window).scroll(function () {
        $('#offers .grid-element-4-1').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInDown");

            }
        });
    });
    $(window).scroll(function () {
        $('#offers .grid-element-4-2').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInUp");

            }
        });
    });
    $(window).scroll(function () {
        $('#offers .grid-element-5').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInRight");

            }
        });
    });
    $(window).scroll(function () {
        $('#offers .grid-element-6').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInLeft");

            }
        });
    });
    $(window).scroll(function () {
        $('#offers .grid-element-7-1').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInDown");

            }
        });
    });
    $(window).scroll(function () {
        $('#offers .grid-element-7-2').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInUp");

            }
        });
    });
    $(window).scroll(function () {
        $('#offers .grid-element-8').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInLeft");

            }
        });
    });
    $(window).scroll(function () {
        $('#offers .grid-element-9-1').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInDown");

            }
        });
    });
    $(window).scroll(function () {
        $('#offers .grid-element-9-2').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInUp");

            }
        });
    });
    $(window).scroll(function () {
        $('#offers .grid-element-10').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInRight");

            }
        });
    });
    $(window).scroll(function () {
        $('#work .step').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInUp");

            }
        });
    });
})