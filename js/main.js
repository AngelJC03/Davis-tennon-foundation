

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

/*********
 THIS JAVASCRIPT IS FOR LOADING THE VIOLA DAVIS STORY CONTENT
 UNDER THE CONDITION THAT THE USER HAS SCROLLED TO THROUGH THE PAGE
*********/

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
    const infoBoxes = document.querySelectorAll('.timeline-entry');
    infoBoxes.forEach(box => {
        observer.observe(box);
    });
});

/*********
 * JAVASCRIPT FOR DONATION FORM
 * PROMPTING USER TO ENTER VALUE IN
 * AMOUNT FIELD
    *********/

function focusAmountInput() {
    document.getElementById('amount').value = ''; // Clears the amount input field
    document.getElementById('amount').focus(); // Focus on the "amount" input field
}