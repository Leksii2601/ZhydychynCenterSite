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

$(document).ready(function() {
  // Ініціалізуємо marquee з оптимальними налаштуваннями
  $('#marquee').marquee({
      // Швидкість прокрутки (менше число = швидше)
      duration: 30000,
      // Важливо: встановлюємо нульовий проміжок між копіями
      gap: 0,
      // Плавна зупинка при наведенні
      pauseOnHover: true,
      // Без затримки перед початком
      delayBeforeStart: 0,
      // Напрямок прокрутки
      direction: 'left',
      // Лінійний рух для плавності
      easing: 'linear',
      // КРИТИЧНО для безперервної анімації
      duplicated: true,
      // Починаємо з видимим вмістом
      startVisible: true,
      // Використовуємо CSS3 для кращої продуктивності
      css3: true
  });
  
  // Змінні для зберігання швидкостей
  var originalSpeed = 30000;
  var slowDownSpeed = 150000;
  
  // Налаштовуємо плавне сповільнення при наведенні
  $('.marquee-container').on('mouseenter', function() {
      $('#marquee').marquee('option', 'duration', slowDownSpeed);
  }).on('mouseleave', function() {
      $('#marquee').marquee('option', 'duration', originalSpeed);
  });
  
  // Адаптуємо швидкість для різних екранів
  function updateSpeed() {
      originalSpeed = window.innerWidth <= 768 ? 25000 : 30000;
      slowDownSpeed = originalSpeed * 5;
      
      if (!$('.marquee-container:hover').length) {
          $('#marquee').marquee('option', 'duration', originalSpeed);
      }
  }
  
  // Викликаємо при завантаженні і зміні розміру
  updateSpeed();
  $(window).on('resize', updateSpeed);
  
  // Прибираємо будь-які transition для уникнення дьоргання
  setTimeout(function() {
      $('.js-marquee-wrapper').css({
          'transition': 'none !important',
          'animation-timing-function': 'linear !important'
      });
  }, 100);
});