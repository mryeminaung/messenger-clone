let nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-light', 'shadow-lg');
    } else {
        nav.classList.remove('bg-light', 'shadow-lg');
    }
});
let btn = document.querySelector('.login_button');
btn.addEventListener('click', () => {
    btn.style.boxShadow = 'none';
});

document.querySelector('.forget-pwd').addEventListener('click', function () {
    alert('relax, sit back and try to remember the password');
});
