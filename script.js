// Functionality for the Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    mobileToggle.addEventListener('click', () => {
        // Toggle the 'open' class on the navigation
        navMenu.classList.toggle('open');
        
        // Change the icon based on state
        if (navMenu.classList.contains('open')) {
            mobileToggle.innerHTML = '✕'; // Close icon
        } else {
            mobileToggle.innerHTML = '☰'; // Hamburger icon
        }
    });
});

// Future functionality like data fetching will go here
console.log("FPL Sidekick loaded successfully!");