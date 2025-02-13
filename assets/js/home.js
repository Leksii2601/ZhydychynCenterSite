// Обираємо всі елементи для анімації
const elements = document.querySelectorAll('.aboutus');

// Налаштування Observer
const options = {
  threshold: 0.5
};

// Створюємо Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, options);

// Спостерігаємо за елементами
elements.forEach(element => {
  observer.observe(element);
});
window.addEventListener("scroll", function () {
  var boxes = document.querySelectorAll('.big-box, .box-1, .box-2, .box-3, .box-4');
  
  boxes.forEach(function(box) {
    var rect = box.getBoundingClientRect();
    
    // Перевіряємо, чи елемент видимий у вьюпорті
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      box.classList.add("highlight");
    } else {
      box.classList.remove("highlight");
    }
  });
});

