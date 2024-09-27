// Dark Mode Toggle
const modeIcon = document.getElementById('dark-mode-icon');
const body = document.body;

modeIcon.addEventListener('click', () => {
    body.classList.toggle('dark');

    // Change icon between moon and sun
    if (body.classList.contains('dark')) {
        modeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        modeIcon.classList.replace('fa-sun', 'fa-moon');
    }
});

// Hamburger Menu Toggle
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
const menuToggleIcon = document.getElementById('menu-toggle-icon');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Switch between hamburger (bars) and close (times) icons
    if (navLinks.classList.contains('active')) {
        menuToggleIcon.classList.replace('fa-bars', 'fa-times');
    } else {
        menuToggleIcon.classList.replace('fa-times', 'fa-bars');
    }
});

// Close the menu when clicking on the close icon
const closeIcon = document.querySelector('.close-icon');

closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggleIcon.classList.replace('fa-times', 'fa-bars');
});

// Close the menu when clicking on a link (optional)
navLinks.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggleIcon.classList.replace('fa-times', 'fa-bars');
});



document.addEventListener('DOMContentLoaded', function() {
    // General function to set up Intersection Observer for any elements
    const setupIntersectionObserver = (selector) => {
        // Select the elements to animate
        const elements = document.querySelectorAll(selector);
        
        // Options for the intersection observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the element is visible
        };

        // Intersection Observer callback function
        const animateOnScroll = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add the 'visible' class when the element is in view
                    entry.target.classList.add('visible');
                } else {
                    // Optionally remove the 'visible' class when the element goes out of view
                    entry.target.classList.remove('visible');
                }
            });
        };

        // Create the observer
        const observer = new IntersectionObserver(animateOnScroll, observerOptions);

        // Observe each element
        elements.forEach(item => {
            observer.observe(item);
        });
    };

    // Set up observers for each section
    setupIntersectionObserver('.home-content');
    setupIntersectionObserver('.profile-picture');
    setupIntersectionObserver('.about-card');
    setupIntersectionObserver('.project-item');
    setupIntersectionObserver('.timeline-item');
    setupIntersectionObserver('.experience-item');
    setupIntersectionObserver('.skill-item');
    setupIntersectionObserver('.social-link');
});
