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
