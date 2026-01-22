const button = document.querySelector('.toggle-button');
const container = document.querySelector('.container');
const header = document.querySelector('header');

button.addEventListener('click', () => {
    container.classList.toggle('dark-mode')
    document.body.classList.toggle('dark-mode')
    header.classList.toggle('dark-mode')
    
    if (container.classList.contains('dark-mode')) {
        button.textContent = 'Light Mode';
        button.style.background = '#444';
    } else {
        button.textContent = 'Dark Mode';
        button.style.background = '#242424';
    }
});

