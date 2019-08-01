import Swiper from 'swiper/dist/js/swiper.js';

export default function() {
    const numberSliderContainer = document.querySelector('.js-number-slider');
    let numberSlider = null;
    if (numberSliderContainer) {
        if (matchMedia) {
            const mq = window.matchMedia('(max-width: 768px)');
            mq.addListener(WidthChange);
            WidthChange(mq);
        }
        function WidthChange(mq) {
            if (mq.matches) {
                setBonusSlider();
            } else if (!mq.matches && numberSlider) {
                unsetSlider();
            }
        }
    }

    function setBonusSlider() {
       
        numberSliderContainer.className = 'swiper-container';

        const wrapper = numberSliderContainer.querySelector('.how-to-get__stages-list')
        
        wrapper.className = 'swiper-wrapper';

        Array.from(wrapper.children).forEach(element => {
            element.className = 'swiper-slide';
        })

        numberSlider = new Swiper(numberSliderContainer, {
            // slidesPerView: 'auto',
            // spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            // breakpoints: {
            //     768: {
            //         slidesPerView: 'auto',
            //         spaceBetween: 20
            //     }
            // },
            on: {
                beforeResize() {
                    if (window.innerWidth <= 768) {
                        numberSlider.slides.css('width', '');
                    }
                }
            }
        });

        console.log('Number slider initialized')
    }


    function unsetSlider() {
        numberSliderContainer.className = 'how-to-get__stages-slider-container';

        const wrapper = numberSliderContainer.querySelector('.swiper-wrapper')
        const pagination = numberSliderContainer.querySelector('.swiper-pagination');

        if (pagination) {
            pagination.innerHTML = '';
            pagination.className = 'swiper-pagination'
        }
        
        wrapper.className = 'how-to-get__stages-list';

        Array.from(wrapper.children).forEach(element => {
            element.className = 'how-to-get__stages-list-item';
        })

        if (numberSlider) {
            numberSlider.destroy();
            numberSlider = null;
        }
    }
}