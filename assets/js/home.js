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