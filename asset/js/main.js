const $$=document.querySelector.bind(document);
const $$$$= document.querySelectorAll.bind(document);

let searchBtn = $$('#header-search-btn');
let searchBar = $$('.header-search-bar-container');
let formBtn = $$('#header-login-btn');
let loginForm = $$('.header-login-form');
let formClose = $$('#header-form-close');
let menu = $$('#header-menu-bar');
let navbar = $$('.header-navbar');
let videoBtn = $$$$('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.slider-controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});


var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = $$$$("#myImg");
var modalImg = document.getElementById("img01");

imgs.forEach(img =>{
    img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


   /*=====SCROLL TOP======*/
   const scrollTop = document.querySelector(".scroll-top");

   window.addEventListener("scroll", function(e) {
       if (this.scrollY >= 500) {
           scrollTop.classList.add("scrolltop-active");
       } else {
           scrollTop.classList.remove("scrolltop-active");
       }
   });
 
