$(document).foundation();
$(document).ready(function(){
		$("#portbutton").click(function(){
			$("#content").slideUp("slow").hide("slow");
			$(footer).slideDown("slow");
			$("#hide").slideDown("slow");
		});
		$("#pointer").click(function(){
			$("#content").slideDown("slow");
			$("#hide").slideUp("slow").hide("slow");
		});
		$("#photolink").click(function(){
			$("#photos").slideDown("slow");
		});
		$("#close").click(function(){
			$("#photos").slideUp("slow");
		});
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}