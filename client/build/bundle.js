/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var UI = __webpack_require__(1);

var app = function() {
  new UI();
};

window.onload = app;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

//// HANDLE MOVEMENT ON MAP ////////////


//// need to require player for coordinates ////////
var UI = function() {

  var canvas = document.querySelector("#map");
  var context = canvas.getContext('2d');
  var ash = document.createElement('img');
  ash.src = "/img/ash.png";
  var ashWidth = 40;
  var ashHeight = ashWidth;
  var x = 150;
  var y = 150;
  var increment = 20;


  var drawAsh = function(image) {
    if (!image) image = this;
    context.drawImage(ash, x - 20, y - 20, ashWidth, ashHeight);
    console.log('draw ash', ash.src);
  };

  var moveAsh = function(image, xInc, yInc) {
    if (!image) image = this;
    context.drawImage(ash, x - 20 + xInc, y - 20 + yInc, ashWidth, ashHeight);
    console.log('draw ash', ash.src);
  };

  if (ash.complete) {
    drawAsh(ash);
  }
  else {
    ash.onload = drawAsh;
  }

  document.onkeydown = function(event) {
    console.log(event.keyCode);

    if (event.keyCode === 39) {
      // right
      if (ash.complete) {
        moveAsh(ash, increment, 0);
      }
      else {
        ash.onload = moveAsh;
      }
      x += increment;
    }

    if (event.keyCode === 37) {
      // left
    }

    if (event.keyCode === 38) {
      // up
    }

    if (event.keyCode === 40) {
      // down
    }
  };

};

module.exports = UI;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map