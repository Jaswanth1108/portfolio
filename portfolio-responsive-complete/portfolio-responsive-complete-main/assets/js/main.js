document.addEventListener('DOMContentLoaded', () => {
    // Function to initialize skill bars
    function initializeSkillBars() {
        const skillBars = document.querySelectorAll('.skills__bar');

        // Set initial width based on data-width attribute
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width') + '%';
            bar.style.setProperty('--skill-width', width); // Set the custom property
        });
    }

    // Function to handle hover effects
    function handleHoverEffects() {
        const skillsItems = document.querySelectorAll('.skills__item');

        skillsItems.forEach(item => {
            const bar = item.querySelector('.skills__bar');
            const width = bar.getAttribute('data-width') + '%';

            // On hover, animate the width of the bar
            item.addEventListener('mouseover', () => {
                bar.style.transition = 'width 1s ease'; // Ensure smooth animation
                bar.style.width = width; // Set the width on hover
            });

            // On mouse leave, reset the width
            item.addEventListener('mouseleave', () => {
                bar.style.transition = 'width 1s ease'; // Ensure smooth animation
                bar.style.width = 0; // Reset width on mouse leave
            });
        });
    }

    // Initialize skill bars and handle hover effects
    initializeSkillBars();
    handleHoverEffects();
});
