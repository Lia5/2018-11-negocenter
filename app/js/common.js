$(function() {

//tabs
if(jQuery('ul.tabs__caption').length) {
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
}
//tel
if(jQuery('#tel').length) {
    var input = document.querySelector("#tel");
    window.intlTelInput(input);
}


//BEGIN popup global
function popupbg() {
    $('.popup-bg').css('height', 200 + $(window).height());
}

$(window).resize(popupbg());

popupbg();

function popups(elem, popup) {

    elem.click(function(e) {
      console.log(popup);
        $('.popup-bg').addClass('active');
        $('body').addClass('active');
        popup.addClass('active');
        $('body').addClass('active');
        // e.preventDefault();
    })

    $('.popup-bg').click(function() {
        $(this).removeClass('active');
        popup.removeClass('active');
        $('body').removeClass('active');
    })

    $('.popup-close').click(function() {
        $('.popup-bg').removeClass('active');
        popup.removeClass('active');
        $('body').removeClass('active');
    })
    // $('.custom-click').click(function() {
    //     $('.customform').removeClass('active');
    // })
    // popup.click(function(e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    // });
}

popups($('.header-popup'), $('.headerpopup'));
popups($('.reviews-popup1'), $('.reviewspopup1'));
popups($('.reviews-popup2'), $('.reviewspopup2'));
popups($('.reviews-popup3'), $('.reviewspopup3'));
popups($('.reviews-popup4'), $('.reviewspopup4'));
popups($('.reviews-popup5'), $('.reviewspopup5'));
popups($('.reviews-popup6'), $('.reviewspopup6'));



//slider 
if(jQuery('.reviews__slider').length) {

  $('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    // prevArrow: '<i class="fa fa-angle-left feedback-slider-arrows arrow-left_mob"></i>',
    prevArrow: '<svg class="svg-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></svg>',
    // nextArrow: '<i class="fa fa-angle-right feedback-slider-arrows arrow-right_mob"></i>',
    nextArrow: '<svg class="svg-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  });
}

if(jQuery('.partners-slider').length) {
  $('.partners-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false, 
    autoplay: true,
    autoplaySpeed: 5000,
    // adaptiveHeight: true,
    fade: true
  });
}


if(jQuery('.about-slider').length) {
  $('.about-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true

  });
}

//about 
if(jQuery('.about').length) {
  
  
    jQuery(window).width() <= 1023 && jQuery(window).width() >= 768 && $('.about-info').on('click', function() {
      $('.wrap-center').toggleClass('open');
  });

}
//arrows
if(jQuery('.double-arrows--wrap').length) {
  $('.double-arrows--wrap').click(function(){
    var arrow = this.parentNode.previousElementSibling;
    var value = $(arrow).scrollLeft() + 100;
    // console.log(arrow);
    // console.log(value);
    $(arrow).scrollLeft(value);
  });
}

//insides-retailers
//slider 
if(jQuery('.cost-retailers__slider').length) {

  $('.cost-retailers__slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20%',
          initialSlide: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '10%',
          initialSlide: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '10%',
          initialSlide: 2
        }
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 5
        }
      }
    ]
  });
}


});


$( window ).resize(function() {
  if(jQuery('.about').length) {
    jQuery(window).width() <= 1023 && jQuery(window).width() >= 768 && $('.about-info').on('click', function() {
        $('.wrap-center').toggleClass('open');
      });
  }
});


