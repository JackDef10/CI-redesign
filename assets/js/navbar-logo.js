window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector(".cultural-logo").style.visibility = "hidden";
    document.querySelector(".cultural-logo-1").style.visibility = "visible";
    document.getElementById("google-translate-btn").style.visibility = "hidden"
    document.getElementById("google-translate-btn2").style.visibility = "visible"
    document.getElementById("google-translate-btn2").style.bottom = "0.5em"
 
  } else {
    document.querySelector(".cultural-logo").style.visibility = "visible";
    document.querySelector(".cultural-logo-1").style.visibility = "hidden";
    document.getElementById("google-translate-btn").style.visibility = "visible"
    document.getElementById("google-translate-btn2").style.visibility = "hidden"
  }
}




