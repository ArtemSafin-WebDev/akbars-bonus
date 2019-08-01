import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export default function() {
    const burgerButton = document.querySelector('.js-burger-menu-btn');
    const menuContent = document.querySelector('.burger-menu');
    const overlay = document.querySelector('.js-burger-overlay');
    let menuOpen = false;
    if (burgerButton && menuContent && overlay) {
        function handleBurgerMenu(event) {
            event.preventDefault();
            if (menuOpen) {
                document.body.classList.remove('burger-menu-open');
                menuOpen = false;
                clearAllBodyScrollLocks();
            } else {
                document.body.classList.add('burger-menu-open');
                menuOpen = true;
                if (window.matchMedia('(max-width: 768px)').matches) {
                    disableBodyScroll(menuContent);
                }
            }
        }

        burgerButton.addEventListener('click', handleBurgerMenu);

        overlay.addEventListener('click', handleBurgerMenu);
    }
}
