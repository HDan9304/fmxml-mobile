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

    // Login and Tutorial Logic
    const loginTrigger = document.getElementById('login-trigger');
    const tutorialTrigger = document.getElementById('tutorial-trigger');
    const loginModal = document.getElementById('login-modal');
    const tutorialCard = document.getElementById('tutorial-card');

    loginTrigger?.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'flex';
    });

    tutorialTrigger?.addEventListener('click', (e) => {
        e.preventDefault();
        tutorialCard.style.display = 'block';
    });

    document.getElementById('close-login')?.addEventListener('click', () => loginModal.style.display = 'none');
    document.getElementById('close-tutorial')?.addEventListener('click', () => tutorialCard.style.display = 'none');
    document.getElementById('tutorial-next')?.addEventListener('click', () => tutorialCard.style.display = 'none');
});

// Future functionality like data fetching will go here
console.log("FPL Sidekick loaded successfully!");