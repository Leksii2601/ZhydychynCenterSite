// Оновлена функція для роботи з різними секціями вкладок
function showTransport(transport, sectionType) {
    // Визначаємо тип секції, якщо не вказаний явно
    if (!sectionType) {
        if (transport.startsWith('car') || transport.startsWith('bus') || 
            transport.startsWith('train') || transport.startsWith('social')) {
            sectionType = 'transport';
        } else if (transport.startsWith('local')) {
            sectionType = 'nutrition';
        } else if (transport.startsWith('locall') || transport.startsWith('nearbyl')) {
            sectionType = 'living';
        }
    }
    
    // Отримуємо всі селектори для вкладок та контенту залежно від секції
    let tabSelector, contentSelector;
    
    if (sectionType === 'transport') {
        tabSelector = '.howToGetTo .transport-option:not(.nutrition-option):not(.living-option)';
        contentSelector = '.howToGetTo .transport-content';
    } else if (sectionType === 'nutrition') {
        tabSelector = '.nutrition-choose .nutrition-option';
        contentSelector = '.nutrition-choose .transport-content';
    } else if (sectionType === 'living') {
        tabSelector = '.living-choose .living-option';
        contentSelector = '.living-choose .transport-content';
    }
    
    // Знімаємо активний стан у відповідній секції
    document.querySelectorAll(tabSelector).forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll(contentSelector).forEach(content => {
        content.classList.remove('active');
    });
    
    // Встановлюємо активний стан для вибраної вкладки та контенту
    const targetTab = document.getElementById(`${transport}-tab`);
    const targetContent = document.getElementById(`${transport}-content`);
    
    if (targetTab) targetTab.classList.add('active');
    if (targetContent) targetContent.classList.add('active');
}

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function() {
    // Активуємо першу вкладку транспорту
    showTransport('car', 'transport');
    
    // Активуємо першу вкладку харчування
    showTransport('local', 'nutrition');
    
    // Активуємо першу вкладку проживання
    showTransport('locall', 'living');
});


new WOW().init();
        
        // Parallax effect
        document.addEventListener('DOMContentLoaded', function() {
            const parallaxElements = document.querySelectorAll('.parallax');
            
            function updateParallax() {
                parallaxElements.forEach(element => {
                    const ratio = parseFloat(element.getAttribute('data-parallax-background-ratio')) || 0.5;
                    const scrollPosition = window.pageYOffset;
                    const elementTop = element.getBoundingClientRect().top + scrollPosition;
                    const distance = scrollPosition - elementTop;
                    const yPos = Math.round(distance * ratio);
                    
                    // Update background position
                    element.style.backgroundPosition = '50% ' + yPos + 'px';
                });
            }
            
            // Update on scroll
            window.addEventListener('scroll', updateParallax);
            
            // Initial calculation
            updateParallax();
        });