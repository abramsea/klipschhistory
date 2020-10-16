'use strict'

$('.opener').click(function() {
    if ($(this).hasClass('opened')) {
        $(this).parent().parent().parent().find('.wrapper.expands').animate({
            opacity: 0,
            height: "toggle"
          }, 500, function() {});
        $(this).removeClass('opened');
        $(this).text("Читать далее →")
    } else {
        $(this).parent().parent().parent().find('.wrapper.expands').animate({
            opacity: 1,
            height: "toggle"
          }, 500, function() {});
        $(this).addClass('opened');
        $(this).text("Свернуть ↑");
    }
});

$('.opener-flex').click(function() {
    if ($(this).hasClass('opened')) {
        $(this).next().animate({
            opacity: 0,
            height: "toggle"
          }, 500, function() {});
        $(this).removeClass('opened');
        $(this).text("Читать далее →")
    } else {
        $(this).next().animate({
            opacity: 1,
            height: "toggle",
          }, 500, function() {});
        $(this).next().css('display','flex');
        $(this).addClass('opened');
        $(this).text("Свернуть ↑");
    }
});

