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

// Оновлення коду анімації партнерів
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.partners-track');
  
  // Забезпечуємо правильну ширину контейнера для безперервного прокручування
  function setupInfiniteScroll() {
    // Отримуємо загальну ширину всіх оригінальних елементів
    const originalWidth = Array.from(track.children)
      .slice(0, track.children.length / 2) // тільки оригінальні елементи
      .reduce((width, item) => width + item.offsetWidth, 0);
    
    // Встановлюємо CSS змінну для анімації
    document.documentElement.style.setProperty('--scroll-width', `-${originalWidth}px`);
    
    // Оновлюємо keyframes анімації
    const keyframes = `
      @keyframes scrollPartners {
        0% { transform: translateX(0); }
        100% { transform: translateX(var(--scroll-width)); }
      }
    `;
    
    // Додаємо або оновлюємо стиль
    let styleEl = document.getElementById('partners-keyframes');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'partners-keyframes';
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = keyframes;
    
    // Налаштування швидкості анімації
    const screenWidth = window.innerWidth;
    let duration = 40; // базова швидкість
    
    if (screenWidth < 768) {
      duration = 30; // швидше на мобільних
    }
    
    // Застосовуємо оптимальну швидкість
    track.style.animationDuration = `${duration}s`;
  }
  
  // Запускаємо налаштування
  setupInfiniteScroll();
  window.addEventListener('resize', setupInfiniteScroll);
  
  // Додаємо паузу при наведенні
  track.addEventListener('mouseenter', () => {
    track.style.animationPlayState = 'paused';
  });
  
  track.addEventListener('mouseleave', () => {
    track.style.animationPlayState = 'running';
  });
});