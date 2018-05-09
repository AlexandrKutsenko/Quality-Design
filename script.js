$(function(){
    $('.toggles button').click(function(){
        var get_id = this.id;
        var get_current = $('.posts .' + get_id);

        $('.post').not(get_current).hide(700);
        get_current.show(700);
    });

    $('#showall').click(function(){
        $('.post').show(700);
    });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:8,
        autoplay:Boolean,
        autoplayTimeout:2500,
        autoplayHoverPause:Boolean,
        loop:Boolean,
        responsiveClass:true,
        responsive:{
            0:{
                items:3,
                nav:true
            },
            420:{
                items:5,
                nav:false
            },
            1000:{
                items:8,
                nav:true,
                loop:true
            }
        }
    });
});
