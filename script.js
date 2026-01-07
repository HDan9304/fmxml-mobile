document.addEventListener('DOMContentLoaded', () => {
    
    // --- DOM Elements ---
    const loginView = document.getElementById('login-view');
    const dashboardView = document.getElementById('dashboard-view');
    
    const teamIdInput = document.getElementById('team-id');
    const loginBtn = document.getElementById('btn-login');
    const logoutBtn = document.getElementById('btn-logout');
    const errorMsg = document.getElementById('error-msg');
    const displayTeamId = document.getElementById('display-team-id');
    
    // Modal Elements
    const modal = document.getElementById('tutorial-modal');
    const openTutorialBtn = document.getElementById('open-tutorial');
    const closeModalBtn = document.querySelector('.close-modal');
    const closeTutorialBtn = document.getElementById('btn-close-tutorial');

    // --- State Management ---
    
    // Check if user is already logged in (localStorage)
    checkSession();

    function checkSession() {
        const storedId = localStorage.getItem('fpl_team_id');
        if (storedId) {
            showDashboard(storedId);
        } else {
            showLogin();
        }
    }

    // --- Actions ---

    function handleLogin() {
        const inputVal = teamIdInput.value.trim();

        // Basic Validation: Check if not empty and is a number
        if (inputVal && !isNaN(inputVal)) {
            // Save to LocalStorage
            localStorage.setItem('fpl_team_id', inputVal);
            errorMsg.classList.add('hidden');
            showDashboard(inputVal);
        } else {
            // Show Error
            errorMsg.classList.remove('hidden');
            // Shake animation effect
            teamIdInput.style.borderColor = 'var(--fpl-pink)';
            setTimeout(() => {
                teamIdInput.style.borderColor = '#333';
            }, 1000);
        }
    }

    function handleLogout() {
        // Remove from storage
        localStorage.removeItem('fpl_team_id');
        // Clear input
        teamIdInput.value = '';
        showLogin();
    }

    // --- View Switchers ---

    function showDashboard(id) {
        displayTeamId.textContent = id;
        loginView.classList.remove('active');
        loginView.classList.add('hidden');
        
        dashboardView.classList.remove('hidden');
        dashboardView.classList.add('active');
    }

    function showLogin() {
        dashboardView.classList.remove('active');
        dashboardView.classList.add('hidden');
        
        loginView.classList.remove('hidden');
        loginView.classList.add('active');
    }

    // --- Modal Logic ---

    function openModal(e) {
        if(e) e.preventDefault();
        modal.classList.remove('hidden');
    }

    function closeModal() {
        modal.classList.add('hidden');
    }

    // --- Event Listeners ---

    loginBtn.addEventListener('click', handleLogin);
    
    // Allow pressing "Enter" key to login
    teamIdInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin();
    });

    logoutBtn.addEventListener('click', handleLogout);

    // Modal listeners
    openTutorialBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    closeTutorialBtn.addEventListener('click', closeModal);
    
    // Close modal if clicking outside content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});