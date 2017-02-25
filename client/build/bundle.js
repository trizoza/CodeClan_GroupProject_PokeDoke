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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

//// HANDLE MOVEMENT ON MAP ////////////


//// need to require player for coordinates ////////
var Map = function() {
  var canvas = document.querySelector("#map");
  var context = canvas.getContext('2d');
  var x = 115;
  var y = 80;
  var increment = 5;

  var ash = document.createElement('img');
  ash.src = "/img/ash.png";
  var ashWidth = 15;
  var ashHeight = ashWidth;
  var house = document.createElement('img');
  house.src = "/img/house.png";
  var gym = document.createElement('img');
  gym.src = "/img/gym.png";
  var grass = document.createElement('img');
  grass.src = "/img/grass.png";
  var pavement = document.createElement('img');
  pavement.src = "/img/pavement.jpeg";

  loadCanvas = function() {
    
    pavement.onload = function() {
      context.drawImage(this, 0, 0, 230, 160);

      ash.onload = function() {
        context.drawImage(this, x - ashWidth/2, y - ashWidth/2, ashWidth, ashHeight);
      };

      house.onload = function() {
        context.drawImage(this, 0, 120, 40, 40);
      };

      gym.onload = function() {
        context.drawImage(this, 20, 0, 80, 40);
        context.drawImage(this, 120, 0, 80, 40);
      };
      
      grass.onload = function() {
        context.drawImage(this, 200, 100, 60, 60);
      };

      drawMap();
      context.drawImage(ash, x - ashWidth/2, y - ashWidth/2, ashWidth, ashHeight);
    };

  };

////// after the images are loaded for use, draw them in proper order
  drawMap = function() {
    context.drawImage(pavement, 0, 0, 230, 160);
    context.drawImage(house, 0, 80, 60, 50);
    context.drawImage(gym, 20, 0, 95, 60);
    context.drawImage(gym, 120, 0, 80, 40);
    context.drawImage(grass, 200, 100, 60, 60);
  };


  var moveAsh = function(xInc, yInc) {
    drawMap();
    context.drawImage(ash, x - ashWidth/2 + xInc, y - ashWidth/2 + yInc, ashWidth, ashHeight);
    x += xInc;
    y += yInc;
    console.log(x,y);
  };

  document.onkeydown = function(event) {
    console.log(event.keyCode);

    if (event.keyCode === 39) {
      // right
      if (x >= 600 - increment) {
        moveAsh(0, 0);
      }
      else if (x === 20 && 240 <= y && y <= 360) {
        moveAsh(0, 0);
      }
      else if (x === 20 && 20 <= y && y <= 160) {
        moveAsh(0, 0);
      }
      else if (x === 320 && 20 <= y && y <= 160) {
        moveAsh(0, 0);
      }
      else{
        moveAsh(increment, 0);
      }
    }

    if (event.keyCode === 37) {
      // left
      if (x <= 0 + increment) {
        moveAsh(0, 0);
      }
      else if (x === 180 && 240 <= y && y <= 360) {
        moveAsh(0, 0);
      }
      else if (x === 280 && 20 <= y && y <= 160) {
        moveAsh(0, 0);
      }
      else if (x === 580 && 20 <= y && y <= 160) {
        moveAsh(0, 0);
      }
      else{
        moveAsh(-increment, 0);
      }
    }

    if (event.keyCode === 38) {
      // up
      if (y <= 0 + increment) {
        moveAsh(0, 0);
      }
      else if (y === 380 && 40 <= x && x <= 160) {
        moveAsh(0, 0);
      }
      else if (y === 180 && 40 <= x && x <= 260) {
        moveAsh(0, 0);
      }
      else if (y === 180 && 340 <= x && x <= 560) {
        moveAsh(0, 0);
      }
  

      else {
        moveAsh(0, -increment);
      }
    }

    if (event.keyCode === 40) {
      // down
      if (y >= 400 - increment) {
        moveAsh(0, 0);
      }
      else if (y === 220 && 40 <= x && x <= 160) {
        moveAsh(0, 0);
      }
      else {
        moveAsh(0, increment);
      }
    }
  };

  loadCanvas();

};

module.exports = Map;

/***/ }),
/* 1 */
/***/ (function(module, exports) {



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var UI = __webpack_require__(1);
var Map = __webpack_require__(0);

var app = function() {
  // new UI();
  new Map();
};

window.onload = app;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map