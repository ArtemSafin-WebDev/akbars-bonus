export default function() {
    const openModal = document.querySelector('.js-modal-open');
    const closeModal = document.querySelector('.js-modal-close');

    if (openModal && closeModal) {
        openModal.addEventListener('click', function(event) {
            event.preventDefault();
            document.body.classList.add('modal-shown');
        })
        closeModal.addEventListener('click', function(event) {
            event.preventDefault();
            document.body.classList.remove('modal-shown');
        })
    }
}
