import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


export default function() {
    const openModal = document.querySelector('.js-modal-open');
    const closeModal = document.querySelector('.js-modal-close');

    const modalContent = document.querySelector('.modals__qa-modal-content');

    if (openModal && closeModal && modalContent) {
        openModal.addEventListener('click', function(event) {
            event.preventDefault();
            document.body.classList.add('modal-shown');
            if (window.matchMedia("(max-width: 768px)").matches) {
                disableBodyScroll(modalContent)
            }
        })
        closeModal.addEventListener('click', function(event) {
            event.preventDefault();
            document.body.classList.remove('modal-shown');
            clearAllBodyScrollLocks();
        })
    }
}
