const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const closeIcon = document.querySelector('.icon-close');
const btnPopup = document.querySelector('.btnlogin-popup');

// Toggle to register form
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    document.querySelector('.form-box.login').style.display = 'none';
    document.querySelector('.form-box.register').style.display = 'block';
});

// Toggle to login form
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    document.querySelector('.form-box.register').style.display = 'none';
    document.querySelector('.form-box.login').style.display = 'block';
});

// Close form
closeIcon.addEventListener('click', () => {
    wrapper.style.display = 'none';
});

// Show login popup
btnPopup.addEventListener('click', () => {
    wrapper.style.display = 'block';
    document.querySelector('.form-box.login').style.display = 'block';
    document.querySelector('.form-box.register').style.display = 'none';
});