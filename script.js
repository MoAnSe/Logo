var media = document.getElementById('all_menu');
var header = document.getElementById('header');
var slideIndex = 1;

menu.onclick = function myFunction(){
  
    if(media.className === "menu"){
        media.className +=" responsive";
        header.style.backgroundColor = 'rgba(6, 212, 248, 0.432)';
    }
    else{
        media.className = "menu";
        header.style.backgroundColor = 'rgba(0,0,0,.3)';
    }
}

showSlide(slideIndex);

function plusSlide(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  var i;
  var slide = document.getElementsByClassName("slide");
  var dot = document.getElementsByClassName("dot");
  if (n > slide.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slide.length}
  for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";  
  }
  for (i = 0; i < dot.length; i++) {
      dot[i].className = dot[i].className.replace(" active", "");
  }
  slide[slideIndex-1].style.display = "block";  
  dot[slideIndex-1].className += " active";
}