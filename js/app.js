$(function (){
    "use strick"
    $("about-slider").slick({
        dots:true,
        dotsClass: "about-dots",
        prevArrow: '<i class="about-slider-arrow fas fa-arrow-left"></i>',
        nextArrow: '<i class="about-slider-arrow fa-solid fa-arrow-right"></i>',
    })
})



var typed = new Typed('#type', {
    strings: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodpor nt ut labore et dolore magna aliqua."],
    typeSpeed: 30,
    loop: true,
    cursorChar: '|',
  });
