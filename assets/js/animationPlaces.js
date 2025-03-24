/**
 * Auto Animate - автоматично додає анімації AOS до всіх сторінок сайту
 * Створено для Жидичин центру
 * Оновлено: 2025-03-24
 */
document.addEventListener('DOMContentLoaded', function() {
    // Перевіряємо, чи AOS вже підключено
    if (typeof AOS === 'undefined') {
        // Якщо AOS не підключено, додаємо необхідні CSS та JS файли
        
        // Додаємо CSS з абсолютним URL
        const aosCSS = document.createElement('link');
        aosCSS.rel = 'stylesheet';
        aosCSS.href = 'https://unpkg.com/aos@next/dist/aos.css';
        document.head.appendChild(aosCSS);
        
        // Додаємо JS з абсолютним URL
        const aosScript = document.createElement('script');
        aosScript.src = 'https://unpkg.com/aos@next/dist/aos.js';
        document.body.appendChild(aosScript);
        
        // Ініціалізуємо AOS після завантаження скрипту
        aosScript.onload = function() {
            applyAnimations();
            initAOS();
        };
    } else {
        // Якщо AOS вже підключено, просто застосовуємо анімації
        applyAnimations();
        initAOS();
    }

    // Функція для додавання атрибутів анімації до елементів
    function applyAnimations() {
        // Перевіряємо, чи страницю вже було анімовано
        if (document.body.getAttribute('data-aos-applied') === 'true') {
            return;
        }
        
        // Визначаємо елементи хедера та футера для виключення
        const headerElement = document.querySelector('header');
        const footerElement = document.querySelector('footer, #footer-container');
        
        // Секція textInside з цитатою
        const textInside = document.querySelector('main .textInside');
        if (textInside) {
            textInside.setAttribute('data-aos', 'fade-up');
            textInside.setAttribute('data-aos-duration', '800');
            
            const textOverlay = textInside.querySelector('.text-overlay');
            if (textOverlay) {
                textOverlay.setAttribute('data-aos', 'fade-up');
                textOverlay.setAttribute('data-aos-delay', '200');
                
                const bigLetter = textOverlay.querySelector('.text-overlay > h1');
                if (bigLetter) {
                    bigLetter.setAttribute('data-aos', 'zoom-in');
                    bigLetter.setAttribute('data-aos-delay', '300');
                }
                
                const quote = textOverlay.querySelector('.text-overlay > h4');
                if (quote) {
                    quote.setAttribute('data-aos', 'fade-up');
                    quote.setAttribute('data-aos-delay', '400');
                    
                    const author = quote.querySelector('h5');
                    if (author) {
                        author.setAttribute('data-aos', 'fade-up');
                        author.setAttribute('data-aos-delay', '500');
                    }
                }
            }
        }
        
        // Секція bixText з великим заголовком
        const bixText = document.querySelector('main .bixText');
        if (bixText) {
            bixText.setAttribute('data-aos', 'fade-up');
            bixText.setAttribute('data-aos-duration', '1000');
            
            const bigHeading = bixText.querySelector('.bixText > h3');
            if (bigHeading) {
                bigHeading.setAttribute('data-aos', 'zoom-in');
                bigHeading.setAttribute('data-aos-delay', '300');
                bigHeading.setAttribute('data-aos-duration', '1200');
            }
        }
        
        // Секція religious-sites з картками церков
        const religiousSites = document.querySelector('main .religious-sites');
        if (religiousSites) {
            religiousSites.setAttribute('data-aos', 'fade-up');
            religiousSites.setAttribute('data-aos-duration', '800');
            
            // Анімація для заголовків секції
            const smallText = religiousSites.querySelector('.religious-sites > .small-text');
            if (smallText) {
                smallText.setAttribute('data-aos', 'fade-up');
                smallText.setAttribute('data-aos-delay', '200');
                
                const span = smallText.querySelector('.small-text > span');
                if (span) {
                    span.setAttribute('data-aos', 'fade-up');
                    span.setAttribute('data-aos-delay', '300');
                }
                
                const heading = smallText.querySelector('.small-text > h5');
                if (heading) {
                    heading.setAttribute('data-aos', 'fade-up');
                    heading.setAttribute('data-aos-delay', '400');
                }
            }
            
            // Анімація для карток церков
            // Анімація для карток церков
const churchCards = religiousSites.querySelectorAll('.religious-sites .church-card');
churchCards.forEach((card, index) => {
    card.setAttribute('data-aos', 'zoom-in');
    card.setAttribute('data-aos-delay', (300 + index * 100).toString());
    card.setAttribute('data-aos-duration', '1200'); // Збільшено з 800 до 1200
    
    const image = card.querySelector('.church-card > img');
    if (image) {
        image.setAttribute('data-aos', 'zoom-in');
        image.setAttribute('data-aos-delay', (400 + index * 100).toString());
        image.setAttribute('data-aos-duration', '1200'); // Додано більшу тривалість
    }
    
    const title = card.querySelector('.church-card > .church-title');
    if (title) {
        title.setAttribute('data-aos', 'fade-up');
        title.setAttribute('data-aos-delay', (500 + index * 100).toString());
        title.setAttribute('data-aos-duration', '1000'); // Додано більшу тривалість
    }
    
    const subtitle = card.querySelector('.church-card > .church-subtitle');
    if (subtitle) {
        title.setAttribute('data-aos', 'fade-up');
        title.setAttribute('data-aos-delay', (600 + index * 100).toString());
        title.setAttribute('data-aos-duration', '1000'); // Додано більшу тривалість
    }
});
        }
        
        // Загальні елементи в основному контенті, виключаючи хедер і футер
        // Використовуємо функцію, щоб перевірити, чи елемент не знаходиться в хедері чи футері
        function isNotInHeaderOrFooter(element) {
            return !headerElement?.contains(element) && !footerElement?.contains(element);
        }
        
        // Заголовки з абсолютними шляхами
        const contentHeadings = Array.from(document.querySelectorAll('main h1:not([data-aos]), main h2:not([data-aos]), main h3:not([data-aos]), main h4:not([data-aos]), main h5:not([data-aos]), .content h1:not([data-aos]), .content h2:not([data-aos]), .content h3:not([data-aos]), .content h4:not([data-aos]), .content h5:not([data-aos]), article h1:not([data-aos]), article h2:not([data-aos]), article h3:not([data-aos]), article h4:not([data-aos]), article h5:not([data-aos])'))
            .filter(isNotInHeaderOrFooter);
            
        contentHeadings.forEach(heading => {
            heading.setAttribute('data-aos', 'fade-up');
            heading.setAttribute('data-aos-duration', '800');
        });
        
        // Зображення з абсолютними шляхами
        const contentImages = Array.from(document.querySelectorAll('main img:not([data-aos]), .content img:not([data-aos]), article img:not([data-aos])'))
            .filter(img => !img.closest('[data-aos]') && isNotInHeaderOrFooter(img));
            
        contentImages.forEach(img => {
            img.setAttribute('data-aos', 'zoom-in');
            img.setAttribute('data-aos-duration', '800');
        });
        
        // Параграфи з абсолютними шляхами
        const contentParagraphs = Array.from(document.querySelectorAll('main p:not([data-aos]), .content p:not([data-aos]), article p:not([data-aos])'))
            .filter(isNotInHeaderOrFooter);
            
        contentParagraphs.forEach(paragraph => {
            paragraph.setAttribute('data-aos', 'fade-up');
            paragraph.setAttribute('data-aos-duration', '800');
        });
        
        // Позначаємо, що анімації вже застосовано
        document.body.setAttribute('data-aos-applied', 'true');
    }
    
    // Функція для ініціалізації AOS з правильними параметрами
    function initAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                offset: 120,
                delay: 0,
                duration: 800,
                easing: 'ease',
                once: true,
                mirror: false,
                anchorPlacement: 'top-bottom',
               // disable: 'mobile'
            });
            
            // Оновлення AOS при завантаженні сторінки та зміні розміру вікна
            window.addEventListener('load', function() {
                AOS.refresh();
            });
            
            window.addEventListener('resize', function() {
                AOS.refresh();
            });
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Знаходимо всі посилання з класом anchor-link
    const anchorLinks = document.querySelectorAll('.anchor-link');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetPage = this.getAttribute('href').split('#')[0];
            const targetAnchor = this.getAttribute('data-target');
            const currentPage = window.location.pathname;
            
            // Якщо ми вже на потрібній сторінці, просто прокручуємо до якоря
            if (currentPage === targetPage || targetPage === '/') {
                const targetElement = document.getElementById(targetAnchor);
                if (targetElement) {
                    // Збільшуємо затримку щоб дочекатись завершення анімації AOS
                    setTimeout(() => {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 800); // Затримка відповідає тривалості анімації AOS
                }
            } else {
                localStorage.setItem('scrollToAnchor', targetAnchor);
                window.location.href = targetPage;
            }
        });
    });
    
    // Перевіряємо, чи потрібно прокрутити до якоря після завантаження сторінки
    const scrollToAnchor = localStorage.getItem('scrollToAnchor');
    if (scrollToAnchor) {
        const targetElement = document.getElementById(scrollToAnchor);
        if (targetElement) {
            // Збільшуємо затримку для завершення всіх анімацій
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                localStorage.removeItem('scrollToAnchor');
            }, 1000); // Більша затримка для повного завантаження
        } else {
            localStorage.removeItem('scrollToAnchor');
        }
    }
});