// Function to rotate my Freddy Logo :)
const logo = document.querySelector('.logo-footer');

logo.addEventListener('click', () => {        
    logo.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        logo.style.transform = 'rotate(0deg)';
    }, 1000);
});


// Burger menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});
