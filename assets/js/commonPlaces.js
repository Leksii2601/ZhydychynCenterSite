document.addEventListener('DOMContentLoaded', async function () {
    try {
        const headerResponse = await fetch('../../components/header.html');
        const headerData = await headerResponse.text();
        document.querySelector('#header-container').innerHTML = headerData;


        document.getElementById("logoforchange").src = "/assets/images/common/black-logo.png";
        document.querySelectorAll(".navigation-bar").forEach(item => {
            item.style.color = "#393e42";
        });
        document.getElementById("header-container").style.backgroundColor = "#f4f4f4";

        
        
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

let currentHighlight = null;  

window.addEventListener("scroll", function () {
    var boxes = document.querySelectorAll('.church-card');
    
    boxes.forEach(function(box) {
        var rect = box.getBoundingClientRect();
        
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            if (currentHighlight && currentHighlight !== box) {
                currentHighlight.classList.remove("highlight");  
            }
            box.classList.add("highlight");  
            currentHighlight = box;  
        } else {
            box.classList.remove("highlight");  
        }
    });
});
