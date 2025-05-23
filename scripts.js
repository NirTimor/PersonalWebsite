
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById("hamburger-icon").addEventListener("click", function() {
    this.classList.toggle("active");
    document.querySelector(".nav-links").classList.toggle("active");
});