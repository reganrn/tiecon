$(function(){
    
    $('.mobile-menu-click').on('click', function(){
        $(this).toggleClass('active');
        $('nav').toggleClass('active');
    });

    $('.chat-click').on('click', function(){
        $(this).toggleClass('active');
        $('.chat-section-box').slideToggle('fast');
    });


    $('.getstartchat').on('click', function(){
        $('.chat-box').css({display: "none"});
        $('.customer-chat').css({display: "block"});
    });

});
