$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        $('body').addClass('scroll-affix-header')
    } else {
        $('body').removeClass('scroll-affix-header')
    }
})
