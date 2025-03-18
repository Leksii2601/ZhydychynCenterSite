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

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
      ".aboutus, .missionandwave, .headingandtext, .first, .second, .description, .lineone, .linetwo, .linethree, .buttonMore"
  );

  const observerForelements = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
              setTimeout(() => {
                  entry.target.classList.add("visible");
              }, index * 500);
              observerForelements.unobserve(entry.target);
          }
      });
  }, { threshold: 0.2 });

  elements.forEach((el) => observerForelements.observe(el));

  const boxes = document.querySelectorAll('.big-box, .small-box');

  const observerForBoxes = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show');
        }, index * 300);
      }
    });
  }, { threshold: 0.2 });

  boxes.forEach(box => observerForBoxes.observe(box));

  const sections = document.querySelectorAll(".heading-section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
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