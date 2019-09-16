// body 
const body = document.querySelector('body');

// navbar 
const navbar = document.getElementById("navbar");

// button burger-menu
const bBurger = document.getElementById("burger-btn");

// icon of button burger-menu
const iBurger = document.getElementById("burger-icon");

/**
  * ====================== *
  *        preloader       *
  * ====================== *
*/

body.style.overflow = 'hidden';

document.body.onload = function () {
  setTimeout(function () {
    var preloader = document.getElementById('preloader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
      body.style.overflow = 'auto';
    }
  }, 1000);
};


$(document).ready(function () {

  /**
   * ====================== *
   *     burger-button      *
   * ====================== *
   */

  bBurger.addEventListener("click", function () {
    // change icon
    if (iBurger.classList.contains("toggler")) {
      iBurger.classList.remove("toggler");
    } else {
      iBurger.classList.add("toggler");
    }

    // change navbar-menu
    if (navbar.classList.contains("mobile")) {
      navbar.classList.remove("mobile");
      body.style.overflow = 'auto';
    } else {
      navbar.classList.add("mobile");
      body.style.overflow = 'hidden';
    }
  });

  /**
   * ====================== *
   *      menu-button       *
   * ====================== *
   */

  $('.navbar-menu__link').on('click', function () {
    iBurger.classList.remove("toggler");
    navbar.classList.remove('mobile');
    body.style.overflow = 'auto';
  });

  /**
   * ====================== *
   *    features-slider     *
   * ====================== *
   */

  $(".features-slider").slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });


  /**
   * ====================== *
   *     tours-gallery      *
   * ====================== *
   */

  $(".tour-gallery__item").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  });


  /**
   * ====================== *
   *      blog-slider       *
   * ====================== *
   */

  $(".blog-list").slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });


  /**
   * ====================== *
   *   animation-numbers    *
   * ====================== *
   */

  var show = true;
  var counter = '#count'

  $(window).on('scroll load resize', function () {

    if (!show) return false;

    var windowTop = $(window).scrollTop();
    var numberTop = $(counter).offset().top;

    // if counters located to end of site 
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();

    // if counters located to start of site 
    var numberHeight = $(counter).outerHeight();

    if ((windowTop + 200 >= numberTop) || (windowHeight + windowTop == documentHeight) || (numberHeight + numberTop < windowHeight)) {
      $('.count-list__number').css('opacity', '1');
      $('.count-list__number').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        })
      });

      show = false;
    }

  });


  /**
    * ====================== *
    *     clients-slider     *
    * ====================== *
  */

  $(".client-list").slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });

});

/**
 * ====================== *
 *      intro-slider      *
 * ====================== *
 */

const slides = document.getElementsByClassName("intro-slider__item");
const dots = document.getElementsByClassName("intro-info__dot");

let slideID = 1;
showSlides(slideID);

function currentSlide(n) {
  showSlides((slideID = n));
}

function showSlides(n) {
  if (n > slides.length) {
    slideID = 1;
  }
  if (n < 1) {
    slideID = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideID - 1].style.display = "flex";
  dots[slideID - 1].className += " active";
}
