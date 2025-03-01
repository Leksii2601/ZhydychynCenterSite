document.addEventListener('DOMContentLoaded', async function () {
    try {
        const headerResponse = await fetch('../../components/header.html');
        const headerData = await headerResponse.text();
        document.querySelector('#header-container').innerHTML = headerData;

        // Чекаємо, поки елемент header з'явиться в DOM
        setTimeout(() => {
            const header = document.querySelector('#header-container');
            let lastScroll = 0;
            const scrollThreshold = 10;

            window.addEventListener('scroll', () => {
                const currentScroll = window.scrollY;
                const scrollDifference = Math.abs(currentScroll - lastScroll);

                if (scrollDifference < scrollThreshold) {
                    return;
                }

                if (currentScroll <= 0) {
                    header.classList.remove('hidden');
                    header.classList.remove('visible');
                    return;
                }

                if (currentScroll > lastScroll) {
                    header.classList.remove('visible');
                    header.classList.add('hidden');
                } else {
                    header.classList.remove('hidden');
                    header.classList.add('visible');
                }

                lastScroll = currentScroll;
            });
            
            // ДОДАЙТЕ ЦЕЙ КОД - для закриття меню після динамічного завантаження header
            setupMobileMenu();
            
        }, 100); // Невелика затримка, щоб header встиг вставитися

        // Завантажуємо footer
        const footerResponse = await fetch('../../components/footer.html');
        const footerData = await footerResponse.text();
        document.querySelector('#footer-container').innerHTML = footerData;
    } catch (error) {
        console.error('Помилка завантаження компонентів:', error);
    }
});

// Функція для налаштування мобільного меню
function setupMobileMenu() {
    // Знаходимо всі посилання "Мандрівнику"
    const mandrivnykuLinks = document.querySelectorAll('a[href="/#mandrivnuky"]');
    const offcanvasMenu = document.getElementById('offcanvasNavbar2');
    
    // Якщо offcanvas елемент ще не завантажений, спробуємо ще раз пізніше
    if (!offcanvasMenu) {
        setTimeout(setupMobileMenu, 100);
        return;
    }
    
    // Додаємо обробник подій для всіх посилань "Мандрівнику"
    mandrivnykuLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Перевіряємо ширину екрану
            if (window.innerWidth < 1200) {
                // Запобігаємо стандартній поведінці посилання щоб уникнути проблем з прокруткою
                e.preventDefault();
                
                // Спробуємо закрити меню за допомогою Bootstrap API
                if (typeof bootstrap !== 'undefined') {
                    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasMenu);
                    if (bsOffcanvas) {
                        // Закриваємо меню
                        bsOffcanvas.hide();
                        
                        // Чекаємо закінчення анімації закриття меню перед переходом
                        setTimeout(function() {
                            // Виконуємо перехід на секцію після закриття меню
                            window.location.href = "/#mandrivnuky";
                        }, 350); // час анімації Bootstrap offcanvas
                        return;
                    }
                }
                
                // Якщо Bootstrap API недоступний, закриваємо вручну
                offcanvasMenu.classList.remove('show');
                
                // Видаляємо backdrops
                const backdrops = document.querySelectorAll('.offcanvas-backdrop');
                backdrops.forEach(function(backdrop) {
                    backdrop.classList.remove('show');
                    setTimeout(function() {
                        backdrop.remove();
                    }, 300);
                });
                
                // Відновлюємо скрол на body
                document.body.classList.remove('overflow-hidden');
                document.body.style.paddingRight = '';
                
                // Переходимо на секцію після закриття меню
                setTimeout(function() {
                    window.location.href = "/#mandrivnuky";
                }, 350);
            }
        });
    });
}