$(document).ready(function(){
    headerInit();
    parallaxInit();
    transInit();
});

function headerInit() {
    $(".header .menu-bt").click(function(){
        $(".header .menu-list").slideToggle(300);
    });
};

function parallaxInit() {
    $parallax = $(".parallax").first();
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        top *= 0.4;
        $parallax.css('transform', 'translateY(-' + top + 'px)')
    });
};

function transInit() {
    $(".top .-trans-bt").click(function(){
        var top = $(".-content-2").first().position().top;
        $('body,html').animate({ scrollTop: top }, 1200);
    })
};
