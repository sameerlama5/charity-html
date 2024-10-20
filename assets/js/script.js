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
    slidesPerView: 1,
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
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
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
var swiper = new Swiper(".eventSwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 800,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
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

  // $(".show-btn").click(function (event) {
  //   event.preventDefault();
  //   var para = $(this).closest(".para");
  //   para.find(".content-para").show();
  //   para.find(".show-btn").hide();
  //   para.find(".less-btn").show();
  // });

  // $(".less-btn").click(function (event) {
  //   event.preventDefault();
  //   var para = $(this).closest(".para");
  //   para.find(".content-para").hide();
  //   para.find(".show-btn").show();
  //   para.find(".less-btn").hide();
  // });


  //memer tab script
    // Switch to Address Tab using jQuery
    $('#nextToAddress').on('click', function() {
      $('#address-tab').tab('show');
  });

  // Switch to Contact Tab using jQuery
  $('#nextToContact').on('click', function() {
      $('#contact-tab').tab('show');
  });
  $('#nextToFamily').on('click', function() {
    $('#family-tab').tab('show');
});
$('#familyFormTemplate').click(function(){
  $('#familyFormTemplate').toggle();
  $(this).hide(); 
});
$('#addBtn').click(function(){
  var newForm = $('#familyFormTemplate').clone().removeAttr('id').show();
  $('#formsContainer').append(newForm); 
  $('#submitContainer').show().appendTo(newForm);
  newForm.find('.removeBtn').click(function(){
      $(this).closest('.familyFormInstance').remove();
      if ($('.familyFormInstance').length === 0) {
          $('#submitContainer').hide();
      }
  });
});

$('#removeBtn').click(function(){
  $('#familyForm').hide();
  $('#addBtn').show(); 
});

});
