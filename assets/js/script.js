jQuery(document).ready(function ($) {
    "use strict";
  
    const SCROLL_OFFSET = 250;

// Scroll event listener
$(window).on("scroll", function() {
  if ($(this).scrollTop() > SCROLL_OFFSET) {
    $(".main-header").addClass("sticky");
  } else {
    $(".main-header").removeClass("sticky");
  }
});
  
    $(".nav .menu").slicknav({
      appendTo: ".header-offcanvas .offcanvas-body",
      label: "",
      allowParentLinks: true,
      closedSymbol: "",
      openedSymbol: "",
      init: function () {
        $(".slicknav_btn").remove();
      },
    });
    $(".nav .menu").slicknav("open");
  
    const banner = new Swiper(".swiper", {
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


    // const swiper = new Swiper('.swiper', {
    //   // Optional parameters
  
    //   loop: true,
    
    //   // If we need pagination
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },
    
    //   // Navigation arrows
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    
    //   // And if we need scrollbar
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
    // });

  });
  