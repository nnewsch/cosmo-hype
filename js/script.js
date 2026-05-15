// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    if(navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
});

// Handle Ticket Form Submission (Only runs if the form is on the page)
const ticketForm = document.getElementById('ticketForm');
if (ticketForm) {
    ticketForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = ticketForm.querySelector('.ticket-btn');
        const originalText = btn.innerText;
        
        btn.innerText = "TRANSMISSION RECEIVED ✓";
        btn.style.background = "linear-gradient(45deg, #00f0ff, #b500ff)";
        
        setTimeout(() => {
            ticketForm.reset();
            btn.innerText = originalText;
            btn.style.background = "";
        }, 3000);
    });
}