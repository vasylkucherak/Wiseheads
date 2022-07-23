//! Імпорт і налаштування скриптів

//? Базові скрипти ====================================================================================================================================
import isWebP from "./modules/_isWebP.js"; //? Перевірка підтримки webp зображень
import touchOrCursor from "./modules/_touchOrCursor.js"; //? Перевірка на touch або mouse івенти

//? Додаткові скрипти =================================================================================================================================
import headerMenu from "./modules/_headerMenu.js"; //? Меню шапки
import download from "./modules/_download.js"; //? Меню шапки
import swiperSlider from "./modules/_swiperSlider.js" //? Слайдер Swiper
import popup from "./modules/_popup.js"; //? Модальне вікно
import scrollOnLinks from "./modules/_scrollOnLinks.js"; //? Плавний скрол при при переході по ссилці

document.addEventListener('DOMContentLoaded', function() {

    isWebP();

    touchOrCursor();

    headerMenu();

    download();

    swiperSlider();

    popup({
        triggersSelector: '[data-popup]',
        popupSelector: '.popup',
        closeSelector: '[data-close]',
        destroyTrigger: false,
        openWhenScrollEnded: false,
        openWhenTimeEnded: 0,
        closeOnEscape: true,
        closeOnBgClick: true
    });

    scrollOnLinks({
        linksAttribue: '[href^="#"]',
        scrollSpeed: 0.3
    });
});