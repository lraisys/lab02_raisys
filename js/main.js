// Get the element with the class "icon"
let icon = document.getElementsByClassName("icon")[0];

// Check if the icon element exists
if (icon) {
  // Add an event listener for the 'click' event on the icon element
  icon.addEventListener('click', responsive_control);
}

// Function to control the responsiveness of the navigation bar
function responsive_control() {
  // Get the element with the id "myTopnav"
  let x = document.getElementById("myTopnav");

  // Check if the element exists
  if (x) {
    // Check if the class name of the element is "topnav"
    if (x.className === "topnav") {
      // If it is, add the "responsive" class to the element
      x.className += " responsive";
    } else {
      // If it's not, remove the "responsive" class from the element
      x.className = "topnav";
    }
  }
}

// JavaScript for the sliding navigation bar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// JavaScript for the fixed top navigation bar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let navbar = document.getElementById("navbar");

  // Check if the navbar element exists
  if (navbar) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-50px";
    }
  }
}