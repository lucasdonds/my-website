window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1 ||
  document.documentElement.scrollTop > 1) {
    document.getElementById("nameTitle").style.fontSize = "2.5em";
    document.getElementById("nameTitle").style.color = "#f1f1f1";
    document.getElementById("header").style.backgroundColor = "#24292e";
    document.getElementById("menuicon").style.filter = "invert(100%)";
    document.getElementById("dropbtn").style.backgroundColor = "#24292e";
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("nameTitle").style.fontSize = "3em";
    document.getElementById("nameTitle").style.color = "black";
    document.getElementById("header").style.backgroundColor = "lightblue";
    document.getElementById("dropbtn").style.backgroundColor = "lightblue";
    document.getElementById("menuicon").style.filter = "invert(0%)";
    document.getElementById("topBtn").style.display = "none";
  }
}

// When the user clicks on the resume button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//-------------------

var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}
