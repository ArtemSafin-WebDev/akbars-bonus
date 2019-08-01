export default function() {
    const accordeons = Array.from(document.querySelectorAll('.js-accordeons'));

    accordeons.forEach(accordeon => {
        const items = Array.from(accordeon.children);
        let openAccordeon = null;

        items.forEach(item => {
            const btn = item.querySelector('.qa__accordeons-open-btn');
            const content = item.querySelector('.qa__accordeons-content');

            btn.addEventListener('click', event => {
                event.preventDefault();
                handleAccordeon(item, content);
            });
        });

        function handleAccordeon(item, content) {
            if (!openAccordeon) {
                item.classList.add('open');
                $(content).slideDown();
                openAccordeon = item;
            } else if(openAccordeon === item) {
                item.classList.remove('open');
                $(content).slideUp();
                openAccordeon = null;
            } else {
                openAccordeon.classList.remove('open');
                $(openAccordeon.querySelector('.qa__accordeons-content')).slideUp();
                item.classList.add('open');
                $(content).slideDown();
                openAccordeon = item;
            }
        }
    });
}
