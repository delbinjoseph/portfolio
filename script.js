// Theme Toggle Logic
const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const icon = toggleButton.querySelector('ion-icon');

// Check for saved user preference
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    htmlElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        icon.setAttribute('name', 'sunny-outline');
    }
}

toggleButton.addEventListener('click', () => {
    let theme = htmlElement.getAttribute('data-theme');
    if (theme === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
        icon.setAttribute('name', 'sunny-outline');
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        icon.setAttribute('name', 'moon-outline');
        localStorage.setItem('theme', 'dark');
    }
});

// Mobile Menu Logic
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const menuIcon = menuToggle.querySelector('ion-icon');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Toggle icon between menu and close
    if (navLinks.classList.contains('active')) {
        menuIcon.setAttribute('name', 'close-outline');
    } else {
        menuIcon.setAttribute('name', 'menu-outline');
    }
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.setAttribute('name', 'menu-outline');
    });
});

// Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});


