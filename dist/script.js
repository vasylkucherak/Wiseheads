/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/_isWebP.js":
/*!***********************************!*\
  !*** ./src/js/modules/_isWebP.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isWebP)\n/* harmony export */ });\n//! Перевірка підтримки webp. Додавання класу '.webp' або 'no-webp' для HTML\n\nfunction isWebP() {\n\n    function testWebP(callback) {\n        var webP = new Image();\n\n        webP.onload = webP.onerror = function () {\n            callback(webP.height == 2);\n        };\n        webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\n    }\n\n    testWebP(function (support) {\n        let className = support === true ? 'webp' : 'no-webp';\n        document.documentElement.classList.add(className);\n    });\n}\n\n//# sourceURL=webpack://my-gulp-modules/./src/js/modules/_isWebP.js?");

/***/ }),

/***/ "./src/js/modules/_touchOrCursor.js":
/*!******************************************!*\
  !*** ./src/js/modules/_touchOrCursor.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ touchOrCursor)\n/* harmony export */ });\n//! Перевірка доступного івента користувачу. Додавання класу '_touch' або '_cursor' для тегу body\n\nfunction touchOrCursor() {\n    \n    const isMobile = {\n        Android: function () {\n            return navigator.userAgent.match(/Android/i);\n        },\n        BlackBerry: function () {\n            return navigator.userAgent.match(/BlackBerry/i);\n        },\n        iOS: function () {\n            return navigator.userAgent.match(/iPhone|iPad|iPod/i);\n        },\n        Opera: function () {\n            return navigator.userAgent.match(/Opera Mini/i);\n        },\n        Windows: function () {\n            return navigator.userAgent.match(/IEMobile/i);\n        },\n        any: function () {\n            return (\n                isMobile.Android() ||\n                isMobile.BlackBerry() ||\n                isMobile.iOS() ||\n                isMobile.Opera() ||\n                isMobile.Windows()\n            );\n        }\n    };\n\n    if (isMobile.any()) {\n        document.body.classList.add('_touch');\n    } else {\n        document.body.classList.add('_cursor');\n    }\n}\n\n//# sourceURL=webpack://my-gulp-modules/./src/js/modules/_touchOrCursor.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_isWebP_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/_isWebP.js */ \"./src/js/modules/_isWebP.js\");\n/* harmony import */ var _modules_touchOrCursor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/_touchOrCursor.js */ \"./src/js/modules/_touchOrCursor.js\");\n//! Імпорт і налаштування скриптів\n\n//? Базові скрипти ====================================================================================================================================\n //? Перевірка підтримки webp зображень\n //? Перевірка на touch або mouse івенти\n\n//? Додаткові скрипти =================================================================================================================================\n//import headerMenu from \"./modules/_headerMenu.js\"; //? Меню шапки\n//import spoiler from \"./modules/_spoiler.js\"; //? Спойлер (або акордіон)\n//import swiperSlider from \"./modules/_swiperSlider.js\" //? Слайдер Swiper\n//import slickSlider from \"./modules/_slickSlider.js\" //? Слайдер Slick\n//import form from \"./modules/_form.js\"; //? Форма\n//import popup from \"./modules/_popup.js\"; //? Модальне вікно\n//import scrollOnLinks from \"./modules/_scrollOnLinks.js\"; //? Плавний скрол при при переході по ссилці\n//import scrollUpBtn from \"./modules/_scrollUpBtn.js\"; //? Скрол на початок сайту при кліці на кнопку вверх\n//import animationByScroll from \"./modules/_animationByScroll.js\"; //? Спрацювання анімації при скролі\n//import slideUpDownToggle from \"./modules/_slideUpDownToggle.js\"; //? Створення анімацій slideUp, slideDown і slideToggle як у jQuery\n//import dynamicAdaptive from \"./modules/_dynamicAdaptive.js\"; //? Динамічний адаптив\n//import ratings from \"./modules/_ratings.js\"; //? зірковий рейтинг\n//import lazyLoading from \"./modules/_lazyLoading.js\"; //? Лінива загрузка\n//import noUISlider from \"./modules/_noUISlider.js\"; //? бігунок\n//import scrollBar from \"./modules/_scrollBar.js\"; //? Індикатор прокрутки\n\n//? Скрипти для модулів =================================================================================================================================\n//import {_slideUp, _slideDown, _slideToggle} from \"./modules/_slideUpDownToggle.js\"; //? Створення анімацій slideUp, slideDown і slideToggle як у jQuery\n\ndocument.addEventListener('DOMContentLoaded', function() {\n\n    (0,_modules_isWebP_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    (0,_modules_touchOrCursor_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    //headerMenu();\n\n    /* spoiler({\n        spoilerTrigger: '.spoiler__header',\n        acordion: false\n    }); */\n\n    //swiperSlider();\n\n    //slickSlider();\n\n    /* form({\n        formId: 'form',\n        imageInputId: 'formImage',\n        previewId: 'formPreview'\n    }); */\n\n    /* popup({\n        triggersSelector: '[data-popup]',\n        popupSelector: '.popup',\n        closeSelector: '[data-close]',\n        destroyTrigger: false,\n        openWhenScrollEnded: false,\n        openWhenTimeEnded: 0,\n        closeOnEscape: true,\n        closeOnBgClick: true\n    }); */\n\n    /* scrollOnLinks({\n        linksAttribue: '[href^=\"#\"]',\n        scrollSpeed: 0.2\n    }); */\n\n    /* scrollUpBtn({\n        breakpoint: 1650\n    }); */\n\n    //animationByScroll();\n\n    //slideUpDownToggle();\n\n    /* dynamicAdaptive({\n        type: \"max\"\n    }); */\n\n    //ratings();\n\n    //lazyLoading();\n\n    //noUISlider();\n\n    //scrollBar();\n});\n\n//# sourceURL=webpack://my-gulp-modules/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;