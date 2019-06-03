var i = 0;
var txt = "Hello, World.";
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typeText").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("topButton").style.display = "block";
  } else {
    document.getElementById("topButton").style.display = "none";
  }
}

function scrollUp(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}