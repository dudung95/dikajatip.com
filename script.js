document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            link.style.transform = 'scale(1.05)';
        }
    });

    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        } else {
            navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    });

    const titleElement = document.getElementById("pageTitle");
    if (titleElement) {
        titleElement.style.textDecoration = "underline";
        titleElement.style.textDecorationColor = "inherit";
        titleElement.style.textDecorationThickness = "2px";
    }
});