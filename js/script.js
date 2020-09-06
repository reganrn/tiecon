$(function(){

    // sticky nav
    var navbar = $('.navbar'),
    distance = navbar.offset().top,
    $window = $(window);

    function menuFun(){
        if ($window.scrollTop() >= distance) {
            navbar.removeClass('sticky-nav').addClass('sticky-nav');
        } else {
            navbar.removeClass('sticky-nav');
        }
    }
    menuFun()
    $window.scroll(function() {
        menuFun()
    });

    // Scroll menu active
    $('.navbar-nav li').click(function(){
        if($('.navbar-collapse').hasClass('show')){
            $('.navbar-collapse').removeClass('show');
        }
        $('.navbar-nav li').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({scrollTop : $(".tiecon-sec:eq('" + $(this).index() + "')").offset().top - 60});
    });

    $(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('.tiecon-sec').each(function(i) {
            if ($(this).position().top <= windscroll + 100) {
                $('.navbar-nav li.active').removeClass('active');
                $('.navbar-nav li').eq(i).addClass('active');
            }
        });

    } else {
        $('.navbar-nav li.active').removeClass('active');
    }
    }).scroll();


})