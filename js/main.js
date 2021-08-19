$(document).ready(function(){

// Sticky navigation menu
let nav_offset_top =$('.header_area').height() + 50;

function navbarFixed(){
    if($('.header_area').length){
        $(window).scroll(function(){
            let scroll = $(window).scrollTop();
            if(scroll>=nav_offset_top){
                $('.header_area .main-menu').addClass('navbar_fixed');
            }else{
                $('.header_area .main-menu').removeClass('navbar_fixed');
            }
        })
    }
}

navbarFixed();

// Typing animation script
var typed = new Typed(".typing", {
    strings: ["Software Engineer", "CV Enthusiast", "Learner"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


});