

/******** 
    JAVASCRIPT EVENT LISTENER,
    CHECKS WHETHER INDEX.HTML CONTENT IS 
    WITHIN VIEW TO APPLY ANIMATION
********/
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When element is in view, add the 'in-view' class to trigger the animation
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Stop observing once the animation has been triggered
            }
        });
    }, {
        threshold: 0.5 // Trigger animation when 50% of the element is in view
    });

    // Observe each .info-box element
    const infoBoxes = document.querySelectorAll('.info-box');
    infoBoxes.forEach(box => {
        observer.observe(box);
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach((element, index) => {
        const delay = element.style.getPropertyValue('--delay') || '0s';
        element.style.animationDelay = delay; // Set delay dynamically
        element.classList.add('active'); // Trigger the animation
    });
});
