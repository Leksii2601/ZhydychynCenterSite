function showTab(tabIndex) {
    // Отримуємо всі вкладки та вміст вкладок
    let tabs = document.querySelectorAll(".tab");
    let contents = document.querySelectorAll(".tab-content");
    let infoContainer = document.querySelector(".info"); // Отримуємо контейнер .info

    // Видаляємо клас active у всіх вкладках і вмісті
    tabs.forEach(tab => tab.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    // Додаємо клас active вибраній вкладці та її вмісту
    tabs[tabIndex].classList.add("active");
    contents[tabIndex].classList.add("active");

    // Змінюємо висоту блоку .info залежно від вибраної вкладки
    if (tabIndex === 1) { // Якщо натиснуто "Розташування"
        infoContainer.style.height = "400px";
    } else {
        infoContainer.style.height = "100%"; // Повертаємо стандартний розмір
    }
}
// Ініціалізація FancyBox для десктопної версії
Fancybox.bind('[data-fancybox="gallery-images"]', {
    Thumbs: {
        autoStart: true,
    },
    Toolbar: {
        display: [
            "close"
        ]
    }
});

// Ініціалізація Swiper для мобільних пристроїв
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
       
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
