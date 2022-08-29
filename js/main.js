(function ($) {
  "user strict";

  $(document).ready(function () {
    // preloader
    $("#preloader").delay(300).animate({
      "opacity": "0"
    }, 500, function () {
      $("#preloader").css("display", "none");
    });

    // nice select
    $('select:not(.ignore)').niceSelect();

    // counter up
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });

    // scroll-to-top
    var ScrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 500) {
        ScrollTop.removeClass("active");
      } else {
        ScrollTop.addClass("active");
      }
    });
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });

    // scrollTop
    var fixed_top = $("#header-section");
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        fixed_top.addClass("animated fadeInDown header-fixed");
      }
      else {
        fixed_top.removeClass("animated fadeInDown header-fixed");
      }
    });

    // navbar-click
    $(".navbar li a").on("click", function () {
      var element = $(this).parent("li");
      if (element.hasClass("show")) {
        element.removeClass("show");
        element.find("li").removeClass("show");
      }
      else {
        element.addClass("show");
        element.siblings("li").removeClass("show");
        element.siblings("li").find("li").removeClass("show");
      }
    });

    // Countdown
    $('[data-countdown]').each(function () {
      var $this = $(this),
        finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function (event) {
        $this.html(event.strftime('<H6> %D :&nbsp </H6> <H6> %H :&nbsp</H6> <H6> %M :&nbsp</H6> <H6> %S </H6>'));
      });
    });

    // grid and list style
    $(".grid-btn").on("click", function () {
      $(".single-item").removeClass("list");
      $("#grid").addClass("active");
      $("#list").removeClass("active");
    });
    $(".list-btn").on("click", function () {
      $(".single-item").addClass("list");
      $("#list").addClass("active");
      $("#grid").removeClass("active");
    });

    // banner-carousel
    $('.banner-carousel').slick({
      infinite: true,
      autoplay: false,
      focusOnSelect: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      prevArrow: "<button type='button' class='slick-prev pull-left btn-icon'></button>",
      nextArrow: "<button type='button' class='slick-next pull-right btn-icon'></button>",
      dots: false,
      dotsClass: 'section-dots',
      customPaging: function (slider, i) {
        var slideNumber = (i + 1),
          totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
      },
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    });

    // testimonial-carousel
    $('.testimonial-carousel').slick({
      infinite: true,
      autoplay: false,
      focusOnSelect: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      prevArrow: "<button type='button' class='slick-prev pull-left btn-icon'></button>",
      nextArrow: "<button type='button' class='slick-next pull-right btn-icon'></button>",
      dots: false,
      dotsClass: 'section-dots',
      customPaging: function (slider, i) {
        var slideNumber = (i + 1),
          totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
      },
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 577,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    });

    // Carousel Jackpot
    $('.carousel-jackpot').slick({
      infinite: true,
      autoplay: false,
      focusOnSelect: false,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      prevArrow:"<button type='button' class='slick-prev pull-left btn-icon'></button>",
      nextArrow:"<button type='button' class='slick-next pull-right btn-icon'></button>",
      dots: false,
      dotsClass: 'section-dots',
      customPaging: function (slider, i) {
        var slideNumber = (i + 1),
          totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
      },
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    });

    // worked-offer-carousel
    $('.feature-game-carousel').slick({
      infinite: true,
      autoplay: true,
      focusOnSelect: true,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      dotsClass: 'section-dots',
      customPaging: function (slider, i) {
        var slideNumber = (i + 1),
          totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
      },
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });

    // tournament games-carousel
    $('.tournament-carousel').slick({
      infinite: true,
      autoplay: false,
      focusOnSelect: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: "<button type='button' class='slick-prev pull-left btn-icon slick-arrow'></button>",
      nextArrow: "<button type='button' class='slick-next pull-right btn-icon slick-arrow'></button>",
      dots: false,
      dotsClass: 'section-dots',
      customPaging: function (slider, i) {
        var slideNumber = (i + 1),
          totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
      },
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // wow Animation
    wow = new WOW(
      {
        animateClass: 'animated',
        offset: 100,
      }
    );
    wow.init();

  });

})(jQuery);