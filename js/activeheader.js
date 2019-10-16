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
