const navLinks = document.querySelectorAll(".nav-menu .nav-links"); //hides mobile menu on nav lik clicks
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
//toggle mobile menu visibility
document.body.classList.toggle("show-mobile-menu");
});

//when close button is clicked
menuCloseButton.addEventListener("click", () =>
     menuOpenButton.click());

//close menu when nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click());
});


//initialize Swiper form swiperjs.com 
const swiper = new Swiper('.slider-wrapper', {
     // Optional parameters, direction vertical removed
     loop: true,
     grabCursor: true,
     spaceBetween: 25,
   
     // If we need pagination
     pagination: {
       el: '.swiper-pagination',
       clickable:true,
       dynamicBullets:true,
     },
   
     // Navigation arrows
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
     // And if we need scrollbar use  scrollbar: {el: '.swiper-scrollbar', }, this code will not be commented
   //responsive break point to implement how many slide to view for each screen size
   breakpoints: {
     0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
   }
   

});
   