$(document).ready(function() {
 
   var action = "click";
   var speed = "500";
    
    $('li.topic').on(action, function(){ 
 
        $(this).next().slideToggle(speed)     
 
        .siblings('li.explain').slideUp();
 
        var img = $(this).children('img'); 
 
        $('img').not(img).removeClass('rotate');
 
        img.toggleClass('rotate');
 
  });
});