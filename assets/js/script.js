jQuery(document).ready(function ($) {
  "use strict";
  const SCROLL_OFFSET = 250;

  // Scroll event listener
  $(window).on("scroll", function () {
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
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });

// doner slider
  const donner = new Swiper(".donors", {
    slidesPerView: 3,
    spaceBetween: 50,
    centeredSlides: true,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
// condolence slider
const condolence = new Swiper(".condolence-swiper", {
  slidesPerView: 1,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
  new VenoBox({
    selector: '.venobox',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
  // //   counter
  // var a = 0;
  // $(window).scroll(function () {
  //   if (!$(".achievement")[0]) {
  //     return;
  //   }
  //   var oTop = $(".achievement").offset().top - window.innerHeight;
  //   if (a == 0 && $(window).scrollTop() > oTop) {
  //     $(".counter").each(function () {
  //       var $this = $(this),
  //         countTo = $this.attr("data-count");
  //       $({
  //         countNum: $this.text(),
  //       }).animate(
  //         {
  //           countNum: countTo,
  //         },

  //         {
  //           duration: 5000,
  //           easing: "linear",
  //           step: function () {
  //             $this.text(Math.floor(this.countNum));
  //           },
  //           complete: function () {
  //             $this.text(this.countNum);
  //           },
  //         }
  //       );
  //     });
  //     a = 1;
  //   }
  // });

  $(".show-btn").click(function (event) {
    event.preventDefault();
    var para = $(this).closest(".para");
    para.find(".content-para").show();
    para.find(".show-btn").hide();
    para.find(".less-btn").show();
  });

  $(".less-btn").click(function (event) {
    event.preventDefault();
    var para = $(this).closest(".para");
    para.find(".content-para").hide();
    para.find(".show-btn").show();
    para.find(".less-btn").hide();
  });
});
