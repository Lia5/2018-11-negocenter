$(function() {

    //tabs
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
//tel
    var input = document.querySelector("#tel");
    window.intlTelInput(input);



//BEGIN popup global
function popupbg() {
    $('.popup-bg').css('height', 200 + $(window).height());
}

$(window).resize(popupbg());

popupbg();

function popups(elem, popup) {

    elem.click(function(e) {
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
    $('.custom-click').click(function() {
        $('.customform').removeClass('active');
    })
    // popup.click(function(e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    // });
}

popups($('.global-form'), $('.globalform'));



});





