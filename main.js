AOS.init();

$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
});
$('#return-to-top').click(function () { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});
$(".first-page-chevron,.button,.second").click(function () {
    $('html,body').animate({
        scrollTop: $("#second-page").offset().top
    },
        'slow');
});
$(".first").click(function () {
    $('html,body').animate({
        scrollTop: $("#first-page").offset().top
    },
        'slow');
});
$(".third,.second-page-chevron").click(function () {
    $('html,body').animate({
        scrollTop: $("#third-page").offset().top
    },
        'slow');
});
$(".forth,.third-page-chevron").click(function () {
    $('html,body').animate({
        scrollTop: $("#forth-page").offset().top
    },
        'slow');
});
$(".fifth,.forth-page-chevron").click(function () {
    $('html,body').animate({
        scrollTop: $("#fifth-page").offset().top
    },
        'slow');
});

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 30) {
            $("nav").css({ "background": "#808080", "box-shadow": "0px 2px 8px 0px rgba(50, 50, 50, 0.08)" });
            $('nav i').css('color', '#fff');
        }
        else {
            $("nav").css({ "background": "transparent", "box-shadow": "none" });
            $('nav i').css('color', '#fff');
        }
    });
});