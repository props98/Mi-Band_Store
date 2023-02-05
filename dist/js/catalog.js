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

/***/ "./catalog.js":
/*!********************!*\
  !*** ./catalog.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./modules/auth.js\");\n/* harmony import */ var _modules_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/products */ \"./modules/products.js\");\n/* harmony import */ var _modules_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/card */ \"./modules/card.js\");\n\n\n\n\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__.authFunc)();\n(0,_modules_products__WEBPACK_IMPORTED_MODULE_1__.productsFunc)();\n(0,_modules_card__WEBPACK_IMPORTED_MODULE_2__.cartFunc)();\n\n\n//# sourceURL=webpack:///./catalog.js?");

/***/ }),

/***/ "./modules/api.js":
/*!************************!*\
  !*** ./modules/api.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nconst apiPath = 'http://localhost:3001';\n\nconst getData = (path) => {\n return fetch(apiPath + path)\n  .then(response => {\n    if (!response.ok) {\n      throw new Error('Ошибка!');\n    }\n\n    return response.json();\n  })\n}\n\n\n//# sourceURL=webpack:///./modules/api.js?");

/***/ }),

/***/ "./modules/auth.js":
/*!*************************!*\
  !*** ./modules/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authFunc\": () => (/* binding */ authFunc)\n/* harmony export */ });\n/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals */ \"./modules/modals.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./modules/api.js\");\n\n\n\nconst authFunc = () => {\n  const authBtn = document.getElementById('open-auth-btn'),\n    openCardBtn = document.getElementById('open-cart-btn'),\n    logOutBtn = document.getElementById('logout-btn'),\n    modal = document.getElementById('auth-modal'),\n    closeBtns = modal.querySelectorAll('.close-btn'),\n    loginBtn = modal.querySelector('.login-btn');\n\n  const cartModal = document.querySelector('#cart-modal');\n\n  // Авторизация пользователя\n  const login = () => {\n    authBtn.classList.add('d-none');\n    openCardBtn.classList.remove('d-none');\n    logOutBtn.classList.remove('d-none');\n    (0,_modals__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modal);\n  };\n\n  // Выход пользователя\n  const loginOut = () => {\n    authBtn.classList.remove('d-none');\n    openCardBtn.classList.add('d-none');\n    logOutBtn.classList.add('d-none');\n  };\n\n  // Проверка пользователя\n  const checkAuth = () => {\n    const user = JSON.parse(localStorage.getItem('auth'));\n\n    if (user) {\n      (0,_api__WEBPACK_IMPORTED_MODULE_1__.getData)('/profile')\n      .then((data) => {\n        if (\n          (data.login && data.login === user.login) &&\n          (data.password && data.password === user.password)\n        ) {\n          login();\n        }\n      })\n    }\n\n  };\n\n  authBtn.addEventListener('click', () => {\n    (0,_modals__WEBPACK_IMPORTED_MODULE_0__.openModal)(modal);\n  });\n\n  closeBtns.forEach((closeBtn) => {\n    closeBtn.addEventListener('click', () => {\n      (0,_modals__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modal);\n    })\n  });\n\n  loginBtn.addEventListener('click', () => {\n    const loginInput = modal.querySelector('#login-control');\n    const passwordInput = modal.querySelector('#password-control');\n\n    const user = {\n      login: loginInput.value,\n      password: passwordInput.value\n    }\n\n    ;(0,_api__WEBPACK_IMPORTED_MODULE_1__.getData)('/profile')\n      .then((data) => {\n        // console.log(data);\n        if (\n          (data.login && data.login === user.login) &&\n          (data.password && data.password === user.password)\n        ) {\n          // console.log('Success');\n          localStorage.setItem('auth', JSON.stringify(data));\n          login();\n        } else {\n          alert('Неверный пароль!')\n        }\n      })\n\n    // localStorage.setItem('auth', JSON.stringify(user));\n    // login();\n  });\n\n  logOutBtn.addEventListener('click', () => {\n    localStorage.removeItem('auth');\n\n    loginOut();\n  })\n\n  // openCardBtn.addEventListener('click', () => {\n  //   openModal(cartModal);\n  // })\n\n  checkAuth();\n\n}\n\n\n//# sourceURL=webpack:///./modules/auth.js?");

/***/ }),

/***/ "./modules/card.js":
/*!*************************!*\
  !*** ./modules/card.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cartFunc\": () => (/* binding */ cartFunc)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./modules/api.js\");\n/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals */ \"./modules/modals.js\");\n\n\n\nconst cartFunc = () => {\n  const cartModal = document.querySelector('#cart-modal');\n  const openCardBtn = document.getElementById('open-cart-btn');\n  const closeBtns = cartModal.querySelectorAll('.close-btn');\n  const container = document.getElementById('cart-container');\n\n  const render = (data) => {\n    container.innerHTML = '';\n\n    data.forEach((item) => {\n      container.insertAdjacentHTML('beforeend', `\n        <div class=\"row border-bottom pb-3 pt-3\">\n          <div class=\"col col-12 col-md-6 mb-3 mb-md-0 fs-4\">\n              ${item.name}\n          </div>\n          <div\n              class=\"col col-12 col-md-6 fs-4 d-flex align-items-center justify-content-end flex-wrap\">\n              <h4 class=\"me-3 d-flex align-itemns-center\">${item.price * item.count} ₽</h4>\n              <button type=\"button\" class=\"btn btn-outline-dark btn-sm cart-item-controls\"\n                  id=\"control-dec\">\n                  -\n              </button>\n              <h6 class=\"cart-item-count me-3 ms-3\">1</h6>\n              <button type=\"button\" class=\"btn btn-outline-dark btn-sm cart-item-controls\"\n                  id=\"control-inc\">\n                  +\n              </button>\n          </div>\n        </div>\n      `)\n    })\n  }\n\n    openCardBtn.addEventListener('click', () => {\n      ;(0,_api__WEBPACK_IMPORTED_MODULE_0__.getData)('/cart')\n      .then((data) => {\n        render(data);\n        (0,_modals__WEBPACK_IMPORTED_MODULE_1__.openModal)(cartModal);\n        })\n        .catch((error) => {\n          console.error('Произошла ошибка!');\n        })\n    })\n\n    closeBtns.forEach((closeBtn) => {\n      closeBtn.addEventListener('click', () => {\n        ;(0,_modals__WEBPACK_IMPORTED_MODULE_1__.closeModal)(cartModal);\n      })\n    });\n}\n\n\n//# sourceURL=webpack:///./modules/card.js?");

/***/ }),

/***/ "./modules/modals.js":
/*!***************************!*\
  !*** ./modules/modals.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"openModal\": () => (/* binding */ openModal)\n/* harmony export */ });\nconst openModal = (modal) => {\n  const layout = document.createElement('div');\n  layout.classList.add('modal-backdrop');\n  layout.classList.add('fade');\n\n  document.body.append(layout);\n\n  // document.body.insertAdjacentHTML('beforeend', `\n  //   <div class=\"modal-backdrop fade\"></div>\n  // `)\n\n  modal.classList.add('d-block');\n\n  setTimeout(() => {\n    const layout = document.querySelector('.modal-backdrop');\n    layout.classList.add('show');\n    modal.classList.add('show');\n  }, 100)\n};\n\nconst closeModal = (modal) => {\n  const layout = document.querySelector('.modal-backdrop');\n  modal.classList.remove('show');\n  layout && layout.classList.remove('show');\n\n  setTimeout(() => {\n    modal.classList.remove('d-block');\n    layout && layout.remove();\n  }, 500)\n};\n\n\n//# sourceURL=webpack:///./modules/modals.js?");

/***/ }),

/***/ "./modules/products.js":
/*!*****************************!*\
  !*** ./modules/products.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productsFunc\": () => (/* binding */ productsFunc)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./modules/api.js\");\n\n\nconst productsFunc = () => {\n  const container = document.getElementById('products-container');\n\n  const render = (data) => {\n    data.forEach((item) => {\n      // console.log(item);  // вывод товаров\n      container.insertAdjacentHTML('beforeend', `\n        <div class=\"col col-12 col-sm-6 col-lg-4 col-xl-3 mb-3\">\n          <a href=\"#\" class=\"card-link\">\n            <div class=\"card\">\n              <img src=\"${item.preview}\" class=\"card-img-top\" alt=\"phone-1\">\n              <div class=\"card-body\">\n                <span class=\"mb-2 d-block text-secondary\">${item.categoryName}</span>\n                <h6 class=\"card-title mb-3\">${item.name}</h6>\n\n                <div class=\"row\">\n                  <div class=\"col d-flex align-itemns-center justify-content-between\">\n                    <h4>${item.price} ₽</h4>\n                    <button type=\"button\" class=\"btn btn-outline-dark\">\n                      <img src=\"/images/icon/shopping-cart-big.svg\" alt=\"login\">\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n      `)\n    })\n  }\n\n  const init = () => {\n    const params = window.location.search;\n\n    const urlSearchParams = new URLSearchParams(params);\n    const id = urlSearchParams.get('id');\n    const url = id ? `/products?category=${id}` : `/products`;\n\n    (0,_api__WEBPACK_IMPORTED_MODULE_0__.getData)(url)\n      .then((data) => {\n        render(data);\n      })\n      .catch((error) => {\n        console.error('Произошла ошибка!');\n      })\n\n  }\n\n  init();\n\n}\n\n\n//# sourceURL=webpack:///./modules/products.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./catalog.js");
/******/ 	
/******/ })()
;