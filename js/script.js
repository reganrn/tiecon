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

    $('.navbar-nav li').click(function(){
        $('.navbar-nav li a').removeClass('active');
        $(this).find('a').addClass('active');
        $('html, body').animate({scrollTop : $(".tiecon-sec:eq('" + $(this).index() + "')").offset().top - 60});
    });
    
    $window.scroll(function() {
        
    });

})