

/******** 
    JAVASCRIPT EVENT LISTENER,
    CHECKS WHETHER INDEX.HTML CONTENT IS 
    WITHIN VIEW TO APPLY ANIMATION

    THIS CODE MAY BE USELESS AND ERASABLE
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

 THIS CODE MAY BE USELESS AND ERASABLE
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
 THIS JAVASCRIPT IS FOR LOADING THE PARTNERS PAGE CONTENT
 UNDER THE CONDITION THAT THE USER HAS SCROLLED TO THROUGH THE PAGE
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

    // Observe each partner section
    const partnerSections = document.querySelectorAll('.partner');
    partnerSections.forEach(section => {
        observer.observe(section);
    });
});

/********
 * JAVASCRIPT FOR DONATION FORM
 * PROMPTING USER TO ENTER VALUE IN
 * AMOUNT FIELD
 *********/

function focusAmountInput() {
    document.getElementById('amount').value = ''; // Clears the amount input field
    document.getElementById('amount').focus(); // Focus on the "amount" input field
}

/*******
 * JAVASCRIPT FOR BURGER MENU
********/

// Select the burger menu
const burgerMenu = document.querySelector('.burger-menu');

// Select the button or element to show the menu
const toggleButton = document.querySelector('.btn'); // Adjust selector as needed

// Add an event listener to toggle the menu
function menutoggle() {
    var menu = document.getElementById("burger-menu-content");
    // Toggle the display of the dropdown
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Hide dropdown
    } else {
        menu.style.display = "block"; // Show dropdown
    }
}

// Hide the dropdown when clicking outside of it
document.addEventListener("click", function(event) {
    var menu = document.getElementById("burger-menu-content");
    var burger = document.querySelector(".burger"); // Burger icon (menu button)

    // Check if the click was outside the menu or burger icon
    if (!burger.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = "none"; // Hide dropdown if clicked outside
    }
});


/********
 * RESPNSIBLE FOR MODAL AND COOKIE STORAGE
 * *******/

// document.addEventListener("DOMContentLoaded", function () {
//     if (!sessionStorage.getItem("auctionModalShown")) {
//         document.getElementById("auction-popup-modal").style.display = "block";
//         document.getElementById("auction-modal-overlay").style.display = "block";
//         sessionStorage.setItem("auctionModalShown", "true");
//     }
// });

function closeModal() {
    document.getElementById("auction-popup-modal").style.display = "none";
    document.getElementById("auction-modal-overlay").style.display = "none";
}