$(document).ready(function(){
    parallaxInit();
});

function parallaxInit() {
    $parallax = $(".parallax").first();
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        top *= 0.4;
        $parallax.css('transform', 'translateY(-' + top + 'px)')
    });
};