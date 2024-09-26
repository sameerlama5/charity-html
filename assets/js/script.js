jQuery(document).ready(function ($) {
    "use strict";
  
    const SCROLL_OFFSET = 250;
  
    // For the header scroll
    if ($(window).scrollTop() > SCROLL_OFFSET) {
      $(".header-main").addClass("sticky");
    }
    $(window).scroll(function () {
      if ($(this).scrollTop() > SCROLL_OFFSET) {
        $(".header-main").addClass("sticky");
      } else {
        $(".header-main").removeClass("sticky");
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
  
    var swiper = new Swiper(".banner", {
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
  });
  