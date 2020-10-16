$(window).scroll(function() {
    $('.hidden').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+470) {
        $(this).css('opacity', 1);
        }
    });
});