$(function() {
    var navbar = $(".navbar");
    $(window).scroll(function () {
        if($(window).scrollTop() <=40){
            navbar.removeClass("navbar-scroll");
            $(".logo").attr("src", "images/DRVONET1-LOGO (2).png");
        }else{
            navbar.addClass("navbar-scroll");
            $(".logo").attr("src", "images/DRVONET1-LOGO (1).png");   
        }    
    });    
});