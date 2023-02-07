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

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_admin_addCategory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/admin/addCategory */ \"./modules/admin/addCategory.js\");\n\n// import { addProduct } from \"./modules/admin/addProduct\";\n\n(0,_modules_admin_addCategory__WEBPACK_IMPORTED_MODULE_0__.addCategory)();\n\n\n//# sourceURL=webpack:///./admin.js?");

/***/ }),

/***/ "./modules/admin/addCategory.js":
/*!**************************************!*\
  !*** ./modules/admin/addCategory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCategory\": () => (/* binding */ addCategory)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ \"./modules/api.js\");\n\n\nconst addCategory = () => {\n  const nameInp = document.getElementById('category-name');\n  const previewInp = document.getElementById('category-image');\n  const saveBtn = document.getElementById('category-add-btn');\n\n  //Todo: Дублируются данные, данные не отображаються в db.json\n\n  const categoryData = {\n    name: '',\n    preview: ''\n  };\n\n  const checkValues = () => {\n    if (nameInp.value === '' || previewInp.value === '') {\n      saveBtn.disabled = true;\n    } else {\n      saveBtn.disabled = false;\n    }\n  };\n\n  nameInp.addEventListener('input', () => {\n    categoryData.name = nameInp.value;\n    checkValues();\n  })\n\n  previewInp.addEventListener('input', () => {\n    const file = previewInp.files[0];\n\n    if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg') {\n      const reader = new FileReader();\n\n      console.log(reader.result);\n\n      reader.onload = () => {\n        categoryData.preview = reader.result;\n      }\n\n      reader.onerror = () => {\n        categoryData.preview = '';\n        previewInp.value = '';\n      }\n\n      reader.readAsDataURL(file);\n\n    } else {\n      previewInp.value = '';\n    }\n\n    checkValues();\n  })\n\n  saveBtn.addEventListener('click', () => {\n    ;(0,_api__WEBPACK_IMPORTED_MODULE_0__.postData)('/categories', {\n      method: 'POST',\n      body: JSON.stringify(categoryData),\n      headers: {\n        'Content-Type': 'aplication/json'\n      }\n    })\n    .then((data) => {\n      ;(0,_api__WEBPACK_IMPORTED_MODULE_0__.getData)('/categories')\n       .then((data) => {\n        console.log(data);\n       })\n    })\n\n  })\n\n  checkValues();\n}\n\n\n//# sourceURL=webpack:///./modules/admin/addCategory.js?");

/***/ }),

/***/ "./modules/api.js":
/*!************************!*\
  !*** ./modules/api.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"postData\": () => (/* binding */ postData)\n/* harmony export */ });\nconst apiPath = 'http://localhost:3001';\n\nconst getData = (path) => {\n return fetch(apiPath + path)\n  .then(response => {\n    if (!response.ok) {\n      throw new Error('Ошибка!');\n    }\n\n    return response.json();\n  })\n}\n\nconst postData = (path, data) => {\n  return fetch(apiPath + path, data)\n    .then(response => {\n      if (!response.ok) {\n        throw new Error('Ошибка!');\n      }\n\n      return response.json();\n    })\n}\n\n\n//# sourceURL=webpack:///./modules/api.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./admin.js");
/******/ 	
/******/ })()
;