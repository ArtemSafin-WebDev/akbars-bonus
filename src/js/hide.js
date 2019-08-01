export default function() {
    const hides = Array.from(document.querySelectorAll('.js-hide'));

    hides.forEach(hide => {
        const btn = hide.nextElementSibling;

        btn.addEventListener('click', function(event) {
            event.preventDefault();
            hide.classList.add('shown');
            this.classList.add('hidden')
        })
    })
}