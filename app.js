/*$(document).ready(function(){
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $("nav").css("background-color", "#ffffff");
        $(".nav-links a").css("color", "#ffffff");
        $(".logo").css("color", "#ffffff");
      } else {
        $("nav").css("background-color", "#ffffff00");
        $(".nav-links").css("background-color", "#ffffff00");
        $(".nav-links a").css("color", "#000000");
        $(".logo").css("color", "#000000");
      }
   });
});*/

const navSlide = ()=> {
    const phone_menu = document.querySelector('.phone-menu');
    const nav = document.querySelector('.nav-links');
    const nav_links = document.querySelectorAll('.nav-links li');
    phone_menu.addEventListener('click',()=>{
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        nav_links.forEach((link, index)=> {
           if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 0.}s`;
            }
        });
        //Phone-Menu Icon Animation
        phone_menu.classList.toggle('toggle');
    });
}

navSlide();