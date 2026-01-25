const logo = document.querySelector('.logo-footer');

logo.addEventListener('click', () => {        
    logo.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        logo.style.transform = 'rotate(0deg)';
    }, 1000);
});