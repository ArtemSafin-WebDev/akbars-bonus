import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import jump from 'jump.js';

export default function() {
    const burgerButton = document.querySelector('.js-burger-menu-btn');
    const menuContent = document.querySelector('.burger-menu');
    const overlay = document.querySelector('.js-burger-overlay');
    const burgerLinks = Array.from(document.querySelectorAll('.main-nav .main-nav__link'));
    let menuOpen = false;
    if (burgerButton && menuContent && overlay) {
        function handleBurgerMenu(event) {
            if (event) event.preventDefault();
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

        burgerLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const elementToJump = document.querySelector(link.hash);
                if (menuOpen) {
                    handleBurgerMenu();
                }
                
                if (!elementToJump) return;

                jump(elementToJump, {
                    duration: 1000,
                    offset: -30,
                    a11y: false
                });
            });
        });

        burgerButton.addEventListener('click', handleBurgerMenu);

        overlay.addEventListener('click', handleBurgerMenu);
    }
}
