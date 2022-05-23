// Navbar Responsiveness.
const hamburger = document.querySelector('.hamburger');
const mobile_nav = document.querySelector('.mobile-nav')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    mobile_nav.classList.toggle('is-active');


})


// COUNTER NUMBER ANIMATION

const numbers = document.querySelectorAll('.numbers');
const speed = 200;

numbers.forEach(counter => {
    const updateNumbers = () => {
        const target = counter.getAttribute('data-target');

        console.log(target);
    }

    updateNumbers();
});

// About section Read More

const readMoreBtn = document.querySelector('.read-more-button');
const aboutText = document.querySelector('.about-text-p');

readMoreBtn.addEventListener('click', (e) => {
    aboutText.classList.toggle('show-more');
    if (readMoreBtn.innerText === "Read More...") {
        readMoreBtn.innerText = "Read Less...";
    } else {
        readMoreBtn.innerText = "Read More...";
    }
});