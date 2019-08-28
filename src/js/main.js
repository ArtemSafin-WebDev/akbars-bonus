// import "core-js/stable";
// import "regenerator-runtime/runtime";

import objectFitImages from 'object-fit-images';
import detectIt from 'detect-it';

import '@fancyapps/fancybox';

import burgerMenu from './burgerMenu';
import bonusTabs from './bonusTabs';
import masonryLayout from './masonry';
import hide from './hide';
import accordeons from './accordeons';
import modals from './modals';
import bonusSlider from './bonusSlider';
import numberSlider from './numberSlider';
import hideHeader from './hideHeader';

document.addEventListener('DOMContentLoaded', function() {
    // Полифилл .contains для IE 11

    if (!SVGElement.prototype.contains) {
        SVGElement.prototype.contains = HTMLDivElement.prototype.contains;
    }

    // Полифилл для CSS свойства ObjectFit (заполнение контейнера изображением)
    objectFitImages();

    // Определение тач устройств

    if (detectIt.hasTouch) {
        document.body.classList.remove('no-touch');
        document.body.classList.add('touch');
    }

    // Бургер меню

    burgerMenu();

    // Табы

    bonusTabs();

    // Плиточная раскладка

    masonryLayout();

    // Показ скрытых элементов по кнопке

    hide();

    // Аккордеоны

    accordeons();

    // Модальные окна

    modals();

    // Слайдеры

    bonusSlider();

    // Слайдер с цифрами

    numberSlider();

    // Скрывать хедер на скролл

    hideHeader();
    
});
