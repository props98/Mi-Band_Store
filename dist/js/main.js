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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./modules/auth.js\");\n\n\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__.authFunc)();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/api.js":
/*!************************!*\
  !*** ./modules/api.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nconst apiPath = 'http://localhost:3001';\n\nconst getData = (path) => {\n return fetch(apiPath + path)\n  .then(response => response.json())\n}\n\n\n//# sourceURL=webpack:///./modules/api.js?");

/***/ }),

/***/ "./modules/auth.js":
/*!*************************!*\
  !*** ./modules/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authFunc\": () => (/* binding */ authFunc)\n/* harmony export */ });\n/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals */ \"./modules/modals.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./modules/api.js\");\n\n\n\nconst authFunc = () => {\n  const authBtn = document.getElementById('open-auth-btn'),\n    openCardBtn = document.getElementById('open-cart-btn'),\n    logOutBtn = document.getElementById('logout-btn'),\n    modal = document.getElementById('auth-modal'),\n    closeBtns = modal.querySelectorAll('.close-btn'),\n    loginBtn = modal.querySelector('.login-btn');\n\n  const cartModal = document.querySelector('#cart-modal');\n\n  // Авторизация пользователя\n  const login = () => {\n    authBtn.classList.add('d-none');\n    openCardBtn.classList.remove('d-none');\n    logOutBtn.classList.remove('d-none');\n    (0,_modals__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modal);\n  };\n\n  // Выход пользователя\n  const loginOut = () => {\n    authBtn.classList.remove('d-none');\n    openCardBtn.classList.add('d-none');\n    logOutBtn.classList.add('d-none');\n  };\n\n  // Проверка пользователя\n  const checkAuth = () => {\n    const user = JSON.parse(localStorage.getItem('auth'));\n\n    if (user) {\n      (0,_api__WEBPACK_IMPORTED_MODULE_1__.getData)('/profile')\n      .then((data) => {\n        if (\n          (data.login && data.login === user.login) &&\n          (data.password && data.password === user.password)\n        ) {\n          login();\n        }\n      })\n    }\n\n  };\n\n  authBtn.addEventListener('click', () => {\n    (0,_modals__WEBPACK_IMPORTED_MODULE_0__.openModal)(modal);\n  });\n\n  closeBtns.forEach((closeBtn) => {\n    closeBtn.addEventListener('click', () => {\n      (0,_modals__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modal);\n    })\n  });\n\n  loginBtn.addEventListener('click', () => {\n    const loginInput = modal.querySelector('#login-control');\n    const passwordInput = modal.querySelector('#password-control');\n\n    const user = {\n      login: loginInput.value,\n      password: passwordInput.value\n    }\n\n    ;(0,_api__WEBPACK_IMPORTED_MODULE_1__.getData)('/profile')\n      .then((data) => {\n        // console.log(data);\n        if (\n          (data.login && data.login === user.login) &&\n          (data.password && data.password === user.password)\n        ) {\n          // console.log('Success');\n          localStorage.setItem('auth', JSON.stringify(data));\n          login();\n        } else {\n          alert('Неверный пароль!')\n        }\n      })\n\n    // localStorage.setItem('auth', JSON.stringify(user));\n    // login();\n  });\n\n  logOutBtn.addEventListener('click', () => {\n    localStorage.removeItem('auth');\n\n    loginOut();\n  })\n\n  openCardBtn.addEventListener('click', () => {\n    ;(0,_modals__WEBPACK_IMPORTED_MODULE_0__.openModal)(cartModal);\n  })\n\n  checkAuth();\n\n}\n\n\n//# sourceURL=webpack:///./modules/auth.js?");

/***/ }),

/***/ "./modules/modals.js":
/*!***************************!*\
  !*** ./modules/modals.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"openModal\": () => (/* binding */ openModal)\n/* harmony export */ });\nconst openModal = (modal) => {\n  const layout = document.createElement('div');\n  layout.classList.add('modal-backdrop');\n  layout.classList.add('fade');\n\n  document.body.append(layout);\n\n  // document.body.insertAdjacentHTML('beforeend', `\n  //   <div class=\"modal-backdrop fade\"></div>\n  // `)\n\n  modal.classList.add('d-block');\n\n  setTimeout(() => {\n    const layout = document.querySelector('.modal-backdrop');\n    layout.classList.add('show');\n    modal.classList.add('show');\n  }, 100)\n};\n\nconst closeModal = (modal) => {\n  const layout = document.querySelector('.modal-backdrop');\n  modal.classList.remove('show');\n  layout && layout.classList.remove('show');\n\n  setTimeout(() => {\n    modal.classList.remove('d-block');\n    layout && layout.remove();\n  }, 500)\n};\n\n\n//# sourceURL=webpack:///./modules/modals.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;