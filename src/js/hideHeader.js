import { throttle } from 'lodash';

export default function() {
    const pageHeader = document.querySelector('.page-header');

    if (!pageHeader) return;

    let initialScrollTop = window.pageYOffset;
    let threshold = pageHeader.offsetHeight;

    window.addEventListener('resize', function() {
        threshold = pageHeader.offsetHeight;
    });

    const throttledScrollHandler = throttle(function() {
        const run = initialScrollTop - window.pageYOffset;
        if (run > 0) {
            document.documentElement.classList.remove('header-hidden');
        } else {
            if (window.pageYOffset >= threshold) {
                document.documentElement.classList.add('header-hidden');
            }
        }
        initialScrollTop = window.pageYOffset;
    }, 100);

    window.addEventListener('scroll', function() {
        throttledScrollHandler();
        if (window.pageYOffset < threshold * 2 || window.pageYOffset === 0) {
            document.documentElement.classList.remove('header-hidden');
        }
        
    });
}
