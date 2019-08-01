export default function() {
    const burgerButton = document.querySelector('.js-burger-menu-btn');

    if (burgerButton) {

        burgerButton.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('burger-menu-open');
        })
        
    }
}