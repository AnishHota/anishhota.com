$(document).ready(function(){

// Sticky navigation menu
// let nav_offset_top =$('.header_area').height() + 2;

// let nav_offset_top =$('.header_area').height();

// function navbarFixed(){
//     if($('.header_area').length){
//         $(window).scroll(function(){
//             let scroll = $(window).scrollTop();
//             if(scroll>=nav_offset_top){
//                 $('.header_area .main-menu').addClass('navbar_fixed');
//             }else{
//                 $('.header_area .main-menu').removeClass('navbar_fixed');
//             }
//         })
//     }
// }
// navbarFixed();

// TODO: Navbar_fixed for Responsive: global.css

const nav = document.querySelector('.header_area');
let navTop = nav.offsetTop;

console.log(navTop);

function fixedNav() {
  if (window.scrollY >= navTop + 50) {    
    nav.classList.add('navbar_fixed');
  } else {
    nav.classList.remove('navbar_fixed');    
  }
}

window.addEventListener('scroll', fixedNav);



// Typing animation script
var typed = new Typed(".typing", {
    strings: ["Software Engineer", "CV Enthusiast", "Learner"],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true
});


});