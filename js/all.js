$(document).ready(function(){
    $('.ham-menu').click(function(event){
        event.preventDefault();
        $('.menu').fadeToggle ();
    });
    $('.go-top').click(function(event){
        $('html , body').animate({scrollTop:0},700);
    });
   $('.scroll').click(function(event){
       event.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('html , body').animate({scrollTop:targetPos},700);
   });
});


//aos
AOS.init();