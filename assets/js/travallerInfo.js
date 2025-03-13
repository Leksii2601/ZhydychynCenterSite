function showTransport(transport) {
    // Hide all transport contents
    const contents = document.querySelectorAll('.transport-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all transport options
    const options = document.querySelectorAll('.transport-option');
    options.forEach(option => {
        option.classList.remove('active');
    });
    
    // Show the selected transport content and mark the option as active
    document.getElementById(`${transport}-content`).classList.add('active');
    document.getElementById(`${transport}-tab`).classList.add('active');
}

// Set default active tab on page load
document.addEventListener('DOMContentLoaded', function() {
    showTransport('car');
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