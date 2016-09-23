$(document).ready(function(){

  //menu na samej gorze
 var main_nav = $(".main_nav").children().eq(0);
 var sub_nav = $(".sub_nav").eq(0);

  main_nav.on("mouseover", function(){
    sub_nav.slideDown(1000);
  });
  main_nav.on("mouseleave", function(){
    sub_nav.slideUp(500);
  });

  var main_nav_1 = $(".main_nav").children().eq(1);
  var sub_nav_1 = $(".sub_nav").eq(1);

   main_nav_1.on("mouseover", function(){
     sub_nav_1.slideDown(1000);
   });
   main_nav_1.on("mouseleave", function(){
     sub_nav_1.slideUp(500);
   });

   var main_nav_2 = $(".main_nav").children().eq(2);
   var sub_nav_2 = $(".sub_nav").eq(2);

    main_nav_2.on("mouseover", function(){
      sub_nav_2.slideDown(1000);
    });
    main_nav_2.on("mouseleave", function(){
      sub_nav_2.slideUp(500);
    });

    

// SLIDERS
var next = $('.arrow_right');
var prev = $('.arrow_left');
var img = $('.slider').find('img');
var index = 0;

next.on('click', function() {
  if (index < img.length - 1) {
      img.eq(index).fadeOut(1000);
      img.eq(index + 1).delay(500).fadeIn(1000);
      index++;
      if (index == img.length - 1) {
          index = -1;
      }
  }
});

prev.on('click', function() {
  if (index >= 0) {
      img.eq(index).fadeOut(1000);
      img.eq(index - 1).delay(500).fadeIn(1000);
      index--;
      if (index < 0) {
          index = img.length - 1;
      }
  }
});



});
