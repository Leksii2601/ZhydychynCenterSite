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