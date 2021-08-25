const logo = $(".logo-header");

$(window).scroll(function(){
    $("header").toggleClass("sticky", $(window).scrollTop() > 0.1);
    if ($(window).scrollTop() > 0.1) {
        logo.attr("src", "images/Logos/logo.png");
    } else {
        logo.attr("src", "images/Logos/logo-acuarela.png")
    }
    
})

const year = new Date().getFullYear();
$('.year').html(year);
