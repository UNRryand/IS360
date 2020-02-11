window.onscroll = function() {myFunction()};

var navSticky = document.getElementById("nav-list-outer");

var sticky = navSticky.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
      navSticky.classList.add("sticky")
    } else {
      navSticky.classList.remove("sticky");
    }
  }