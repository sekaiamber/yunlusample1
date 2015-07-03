$(document).ready(function(){
    headerInit();
    parallaxInit();
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
