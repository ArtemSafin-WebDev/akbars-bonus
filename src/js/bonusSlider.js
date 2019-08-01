import Swiper from 'swiper/dist/js/swiper.js';


export default function() {
    const bonusSliderContainer = document.querySelector('.js-bonus-slider');
    let bonusSlider = null;

    if (bonusSliderContainer) {
        if (matchMedia) {
            const mq = window.matchMedia('(max-width: 968px)');
            mq.addListener(WidthChange);
            WidthChange(mq);
        }

        function WidthChange(mq) {
            if (mq.matches) {
                setBonusSlider();
            } else if (!mq.matches && bonusSlider) {
                unsetSlider();
            }
        }
    }

    function setBonusSlider() {
       
        bonusSliderContainer.className = 'swiper-container';

        const wrapper = bonusSliderContainer.querySelector('.bonus__categories-list')
        
        wrapper.className = 'swiper-wrapper';

        Array.from(wrapper.children).forEach(element => {
            element.className = 'swiper-slide';
        })

        bonusSlider = new Swiper(bonusSliderContainer, {
            slidesPerView: 'auto',
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                768: {
                    slidesPerView: 'auto',
                    spaceBetween: 20
                }
            },
            on: {
                beforeResize() {
                    if (window.innerWidth <= 768) {
                        bonusSlider.slides.css('width', '');
                    }
                }
            }
        });
    }


    function unsetSlider() {
        bonusSliderContainer.className = 'bonus__categories-slider-wrapper';

        const wrapper = bonusSliderContainer.querySelector('.swiper-wrapper')
        const pagination = bonusSliderContainer.querySelector('.swiper-pagination');

        if (pagination) {
            pagination.innerHTML = '';
            pagination.className = 'swiper-pagination'
        }
        
        wrapper.className = 'bonus__categories-list';

        Array.from(wrapper.children).forEach(element => {
            element.className = 'bonus__categories-list-item';
        })

        if (bonusSlider) {
            bonusSlider.destroy();
            bonusSlider = null;
        }
    }
}