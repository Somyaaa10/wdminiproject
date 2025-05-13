// Toggle search form
let searchForm = document.querySelector('.search-form');
let searchIcon = document.querySelector('#search-icon');

searchIcon.onclick = () => {
    searchForm.classList.toggle('active');
}

// Toggle navbar in mobile view
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

// Loading animation
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setTimeout(loader, 2000);
}

window.onload = fadeOut;
