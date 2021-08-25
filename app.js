const logo = $(".logo-header");
const distance = 200;

$(window).scroll(function(){
    $("header").toggleClass("sticky", $(window).scrollTop() > distance);
    if ($(window).scrollTop() > distance) {
        logo.attr("src", "images/Logos/logo.png");
    } else {
        logo.attr("src", "images/Logos/logo-acuarela.png")
    }
    
})

const year = new Date().getFullYear();
$('.year').html(year);
