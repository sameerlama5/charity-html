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

     //   counter
  var a = 0;
  $(window).scroll(function () {
    if (!$(".achievement")[0]) {
      return;
    }
    var oTop = $(".achievement").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $(".counter").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 5000,
            easing: "linear",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      });
      a = 1;
    }
  });
  });
  