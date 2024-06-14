$(function() {
    var navbar = $(".navbar");
    $(window).scroll(function () {
        if($(window).scrollTop() <=40){
            navbar.removeClass("navbar-scroll");
            $(".logo").attr("src", "DRVONET1-LOGO (2).PNG");
        }else{
            navbar.addClass("navbar-scroll");
            $(".logo").attr("src", "DRVONET1-LOGO (1).PNG");   
        }    
    });    
});