// Default header starts as transparent
window.addEventListener("DOMContentLoaded", function() {
  var header = document.querySelector('#header-container');
  header.classList.add("transparent");
  document.getElementById("logoforchange").src = "/assets/images/common/white-logo.svg";
});

// Scroll event listener for header style changes
window.addEventListener("scroll", function () {
  var header = document.querySelector('#header-container');
  
  if (window.scrollY > 150) {
    header.classList.add("scrolled");
    header.classList.remove("transparent");
    document.getElementById("logoforchange").src = "/assets/images/common/black-logo.png";
    document.getElementById("logoforchange").style.height = "70px";
  } else {
    header.classList.add("transparent");
    header.classList.remove("scrolled");
    document.getElementById("logoforchange").src = "/assets/images/common/white-logo.svg";
  }
});

// Visibility Observer for .aboutus elements
const elements = document.querySelectorAll('.aboutus');
const options = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, options);

// Observe all .aboutus elements
elements.forEach(element => {
  observer.observe(element);
});

// Highlight boxes on scroll
window.addEventListener("scroll", function () {
  var boxes = document.querySelectorAll('.big-box, .box-1, .box-2, .box-3, .box-4');
  
  boxes.forEach(function(box) {
    var rect = box.getBoundingClientRect();
    
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      box.classList.add("highlight");
    } else {
      box.classList.remove("highlight");
    }
  });
});