// Smooth scroll untuk navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Download CV button
document.querySelector('.btn-download').addEventListener('click', function(e) {
    e.preventDefault();
    alert('CV akan didownload. Untuk sekarang, kamu bisa upload file CV PDF-mu ke website nanti.');
    // Nanti ganti dengan: window.open('cv-maulana.pdf', '_blank');
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        navbar.style.background = 'rgba(30, 58, 138, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#1e3a8a';
        navbar.style.backdropFilter = 'none';
    }
});