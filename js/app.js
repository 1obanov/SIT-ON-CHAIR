

document.addEventListener("DOMContentLoaded",function() {

  var box1 = document.querySelector(" .box1");
  var box2 = document.querySelector(" .box2");

  var desc1 = document.querySelector(" .desc1");
  var desc2 = document.querySelector(" .desc2");

  box1.addEventListener("mouseover", function(){
    desc1.classList.add("none");
});
  box1.addEventListener("mouseleave", function(){
    desc1.classList.remove("none");
});

box2.addEventListener("mouseover", function(){
  desc2.classList.add("none");
});
box2.addEventListener("mouseleave", function(){
  desc2.classList.remove("none");
});


});
