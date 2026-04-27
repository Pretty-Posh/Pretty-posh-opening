const bar = document.getElementById('bar');
const nav = document.getElementById('topnav');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

if (nav) {
    nav.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// SHOP PAGE
const filter = document.querySelector('button.popular');
const price = document.querySelectorAll('.price');

if (filter) {
    filter.addEventListener('click', () => {
        alert('Filter is not available yet!');
    });
}