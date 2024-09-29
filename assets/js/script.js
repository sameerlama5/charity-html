jQuery(document).ready(function ($) {
  'use strict';
    const SCROLL_OFFSET = 250;

// Scroll event listener
$(window).on("scroll", function() {
  if ($(this).scrollTop() > SCROLL_OFFSET) {
    $(".main-header").addClass("sticky");
  } else {
    $(".main-header").removeClass("sticky");
  }
});
  
    $(".header-nav .menu").slicknav({
      appendTo: ".header-offcanvas .offcanvas-body",
      label: "",
      allowParentLinks: true,
      closedSymbol: "",
      openedSymbol: "",
      init: function () {
        $(".slicknav_btn").remove();
      },
    });
    $(".header-nav .menu").slicknav("open");
  
    const banner = new Swiper(".banner-swiper", {
      
      loop: true,
      speed: 800,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      
    });

    var member = new Swiper('.member-swiper', {
      spaceBetween: 30, 
      loop: true,
      navigation: {
          nextEl: '.member-swiper .swiper-button-next',
          prevEl: '.member-swiper .swiper-button-prev',
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          spaceBetween: 30,
          slidesPerView: 3,
        },
        768: {
          spaceBetween: 30,
          slidesPerView: 1,
        },
      },
  });
  });
  