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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var Player = function(){
  this.name = "";
  this.pokedex = [];//unlimited
  this.pokemonOnHand = []//4x
  this.pic = ""//url
  this.x = 2//600
  this.y = 2//600
  this.turn = true;
  this.faintedPokemons = [];
}

Player.prototype = {
  
  setPlayersName: function(newName){
    this.name = newName;
  }


};

module.exports = Player;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var Pokemon = function(pokemonObj){
  this.name = pokemonObj.name;
  this.id = pokemonObj.id;
  this.attack = pokemonObj.attack;
  this.defense = pokemonObj.defense;
  this.hp = pokemonObj.hp;
  this.front_picture = pokemonObj.front_picture;
  this.back_picture = pokemonObj.back_picture;
  this.type = pokemonObj.type;
  this.move = pokemonObj.move;
  this.fightHp = pokemonObj.fightHp;
}

module.exports = Pokemon;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

//// HANDLE MOVEMENT ON MAP ////////////
var Game = __webpack_require__(4);

//// need to require player for coordinates ////////
var Map = function(pokemonData, Player, Pokemon) {
  var game = new Game(pokemonData, Player, Pokemon, aButton);
  var welcomeScreen = document.querySelector('#welcomeScreen');
  var chooseScreen = document.querySelector('#choose_screen');
  var fightScreen = document.querySelector('#fight_screen');
  var homeScreen = document.querySelector('#home_screen');
  var mapCanvas = document.querySelector("#map");

  var context = mapCanvas.getContext('2d');
  var x = 300;
  var y = 200;
  var increment = 10;
  var ash = document.createElement('img');
  ash.src = "/img/ash.png";
  var ashWidth = 40;
  var ashHeight = ashWidth;
  var house = document.createElement('img');
  house.src = "/img/house.png";
  var gym = document.createElement('img');
  gym.src = "/img/gym.png";
  var grass = document.createElement('img');
  grass.src = "/img/grass.png";
  var pavement = document.createElement('img');
  pavement.src = "/img/pavement.png";
  var upButton = document.querySelector('#up-button');
  var downButton = document.querySelector('#down-button');
  var leftButton = document.querySelector('#left-button');
  var rightButton = document.querySelector('#right-button');
  var aButton = document.querySelector('#a-button');
  var nameSubmitButton = document.querySelector('#submit_name');

  loadCanvas = function() {

    pavement.onload = function() {
      context.drawImage(this, 0, 0, 580, 460);
      ash.onload = function() {
        context.drawImage(this, x - 20, y - 20, ashWidth, ashHeight);
      };
      house.onload = function() {
        context.drawImage(this, 0, 270, 150, 130);
      };
      gym.onload = function() {
        context.drawImage(this, 0, 0, 220, 170);
        context.drawImage(this, 320, 0, 220, 170);
      };
      grass.onload = function() {
        context.drawImage(this, 540, 400, 40, 60);
      };
      drawMap();
      context.drawImage(ash, x - 20, y - 20, ashWidth, ashHeight);
    }; 
    
  };

  drawMap = function() {
    context.drawImage(pavement, 0, 0, 580, 460);
    context.drawImage(house, 0, 270, 150, 130);
    context.drawImage(gym, 0, 0, 220, 170);
    context.drawImage(gym, 360, 0, 220, 170);
    context.drawImage(grass, 540, 400, 40, 60);
    context.drawImage(grass, 500, 400, 40, 60);
    context.drawImage(grass, 460, 400, 40, 60);
    context.drawImage(grass, 420, 400, 40, 60);
    context.drawImage(grass, 380, 400, 40, 60);
    context.drawImage(grass, 340, 400, 40, 60);
    context.drawImage(grass, 300, 400, 40, 60);
    context.drawImage(grass, 260, 400, 40, 60);
    context.drawImage(grass, 540, 340, 40, 60);
    context.drawImage(grass, 500, 340, 40, 60);
    context.drawImage(grass, 460, 340, 40, 60);
    context.drawImage(grass, 420, 340, 40, 60);
    context.drawImage(grass, 380, 340, 40, 60);
    context.drawImage(grass, 340, 340, 40, 60);
    context.drawImage(grass, 300, 340, 40, 60);
    context.drawImage(grass, 260, 340, 40, 60);
    context.drawImage(grass, 540, 280, 40, 60);
    context.drawImage(grass, 500, 280, 40, 60);
    context.drawImage(grass, 460, 280, 40, 60);
    context.drawImage(grass, 420, 280, 40, 60);
    context.drawImage(grass, 380, 280, 40, 60);
    context.drawImage(grass, 340, 280, 40, 60);
    context.drawImage(grass, 300, 280, 40, 60);
    context.drawImage(grass, 260, 280, 40, 60);
  };

  var moveAsh = function(xInc, yInc) {
    drawMap();
    context.drawImage(ash, x - 20 + xInc, y - 20 + yInc, ashWidth, ashHeight);
    x += xInc;
    y += yInc;
    console.log(x,y);
    checkIfInGrass();
  };

  document.onkeydown = function(event) {
    console.log(event.keyCode);
    if (mapCanvas.style.zIndex == 100) {

      if (event.keyCode === 39) {
        // right
        if (x >= 560) {
          moveAsh(0, 0);
        }
        else if (x === 340 && 20 <= y && y <= 180) {
          moveAsh(0, 0);
        }
        else{
          moveAsh(increment, 0);
        }
      }

      if (event.keyCode === 37) {
        // left

        if (x <= 20) {
          moveAsh(0, 0);
        }
        else if (x === 240 && 20 <= y && y <= 180) {
          moveAsh(0, 0);
        }
        else if (x === 170 && 260 <= y && y <= 410) {
          moveAsh(0, 0);
        }
        else{
          moveAsh(-increment, 0);
        }
      }

      if (event.keyCode === 38) {
        // up

        if (y <= 20) {
          moveAsh(0, 0);
        }
        else if (y === 420 && 20 <= x && x <= 160) {
          moveAsh(0, 0);
        }
        else if (y === 190 && 20 <= x && x <= 230) {
          moveAsh(0, 0);
        }
        else if (y === 190 && 350 <= x && x <= 560) {
          moveAsh(0, 0);
        }
        else {
          moveAsh(0, -increment);
        }
      }

      if (event.keyCode === 40) {
        // down

        if (y >= 440) {
          moveAsh(0, 0);
        }
        else if (y === 250 && 20 <= x && x <= 160) {
          moveAsh(0, 0);
        }
        else {
          moveAsh(0, increment);
        }
      }


    }
    
  };





  ///////////// GRASS FIGHT ON /////////////////////////////////////////////////////////////////
  var checkIfInGrass = function() {
    
    if (x >= 260 && y >= 280) {

      var randNum = Math.ceil(Math.random()*(10 - 0));      

      if (randNum === 10) {
        console.log('you are being attacked');
        

        if (game.player.pokemonOnHand.length >= 1 && game.grassOpponant.pokemonOnHand.length >= 1) {

          toggleViews(mapCanvas, fightScreen);
          fightScreen.innerHTML = "<p id='player_name'>"+game.player.name+"</p><p id='player_pok_name'>"+game.player.pokemonOnHand[0].name+"</p><p id='player_pok_hp'>"+game.player.pokemonOnHand[0].fightHp+"</p><p id='opponant_pok_name'>"+game.grassOpponant.pokemonOnHand[0].name+"</p><p id='opponant_pok_hp'>"+game.grassOpponant.pokemonOnHand[0].fightHp+"</p>";

        }

        aButton.onclick = function(){

          if (fightScreen.style.zIndex == 100) {

          if (game.player.pokemonOnHand.length >= 1 && game.grassOpponant.pokemonOnHand.length >= 1) {

            game.fight(game.player, game.grassOpponant, game.calcDamage);
            
            fightScreen.innerHTML = "<p id='player_name'>"+game.player.name+"</p><p id='player_pok_name'>"+game.player.pokemonOnHand[0].name+"</p><p id='player_pok_hp'>"+game.player.pokemonOnHand[0].fightHp+"</p><p id='opponant_pok_name'>"+game.grassOpponant.pokemonOnHand[0].name+"</p><p id='opponant_pok_hp'>"+game.grassOpponant.pokemonOnHand[0].fightHp+"</p>";

            game.checkForFainted(game.player);
            game.checkForFainted(game.grassOpponant);

            console.log('aButton has been clicked');
          }
          else {
            game.getFaintedPokemon(game.player, game.grassOpponant);
            console.log('player', game.player)
            toggleViews(fightScreen, mapCanvas);
            game.populateOpponant(game.grassOpponant, 1);

          }
        }
      }
    }
  }
}
///////////// GRASS FIGHT OVER /////////////////////////////////////////////////////////////////

//////////// ENTER HOME ////////////////////////////////////////////////////////////////////////

if (x === 50 || x === 60 && y === 420) {
  if (event.keyCode === 72) {
    //
    









  }
}  

//////////// LEAVE HOME ////////////////////////////////////////////////////////////////////////

//////////////// BUTTONS ///////////////////////////////////////////////////////////////////////
  upButton.onclick = function(){
    if (y <= 20) {
      moveAsh(0, 0);
    }
    else if (y === 420 && 20 <= x && x <= 160) {
      moveAsh(0, 0);
    }
    else if (y === 190 && 20 <= x && x <= 230) {
      moveAsh(0, 0);
    }
    else if (y === 190 && 350 <= x && x <= 560) {
      moveAsh(0, 0);
    }
    else {
      moveAsh(0, -increment);
    }
  }

  downButton.onclick = function(){
    if (y >= 440) {
      moveAsh(0, 0);
    }
    else if (y === 250 && 20 <= x && x <= 160) {
      moveAsh(0, 0);
    }
    else {
      moveAsh(0, increment);
    }
  }

  leftButton.onclick = function(){
    if (x <= 20) {
      moveAsh(0, 0);
    }
    else if (x === 240 && 20 <= y && y <= 180) {
      moveAsh(0, 0);
    }
    else if (x === 170 && 260 <= y && y <= 410) {
      moveAsh(0, 0);
    }
    else{
      moveAsh(-increment, 0);
    }
  }

  rightButton.onclick = function(){
    if (x >= 560) {
      moveAsh(0, 0);
    }
    else if (x === 340 && 20 <= y && y <= 180) {
      moveAsh(0, 0);
    }
    else{
      moveAsh(increment, 0);
    }
  }

  aButton.onclick = function(){
    //////// testing //////////
    // console.log('calc damge', game.calcDamage(game.unusedPokemon[2], game.unusedPokemon[77]));
    // game.playerPicksPokemon("pikachu");
    // console.log('player pick pokemon', game.player.pokemonOnHand);
    // game.populateOpponant(game.opponant, 3);
    // console.log('oponnant hand', game.opponant.pokemonOnHand);
    // console.log('oponnant poke name', game.opponant.pokemonOnHand[0].name);
    // console.log('left pokemon', game.unusedPokemon);
 
    console.log('aButton has been clicked');
  }

  /////////// 01 WELCOME SCREEN ////////////////  
  nameSubmitButton.onclick = function() {
    var nameToAdd = document.querySelector('#name_to_add');
    game.player.setPlayersName(nameToAdd.value);
    //////

    game.populateOpponant(game.grassOpponant, 1);
    console.log('opponants pokemon', game.grassOpponant.pokemonOnHand[0]);

    toggleViews(welcomeScreen, chooseScreen);
    console.log('players name', game.player.name);

     /////////// 02 CHOOSE SCREEN ////////////////  
     var welcomeQuote = document.createElement('p');
     welcomeQuote.innerText = "Hey " + game.player.name + "! Choose your Pokémon!"
     chooseScreen.appendChild(welcomeQuote);

     var bulbasaurPic = document.createElement('img');
     bulbasaurPic.id = 'bulbasaur';
     bulbasaurPic.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';

     var charmanderPic = document.createElement('img');
     charmanderPic.id = 'charmander';
     charmanderPic.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png';

     var squirtlePic = document.createElement('img');
     squirtlePic.id = 'squirtle';
     squirtlePic.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png';

     chooseScreen.appendChild(bulbasaurPic);
     chooseScreen.appendChild(charmanderPic);
     chooseScreen.appendChild(squirtlePic);

     bulbasaurPic.onclick = function() {
       game.playerPicksPokemon("bulbasaur");
       console.log('sweet you have choosen bulbi! its gonna be muddy', game.player.pokemonOnHand[0]);
       toggleViews(chooseScreen, mapCanvas);
     }

     charmanderPic.onclick = function() {
       game.playerPicksPokemon("charmander");
       console.log('sweet you have choosen charmi! its gonna be hot', game.player.pokemonOnHand[0]);
       toggleViews(chooseScreen, mapCanvas);
     }

    squirtlePic.onclick = function() {
       game.playerPicksPokemon("squirtle");
       console.log('sweet you have choosen squirty! its gonna be wet', game.player.pokemonOnHand[0]);
       toggleViews(chooseScreen, mapCanvas);
     }

  }

  

  //////////////// BUTTONS ///////////////////////////////////////////////////////////////////////




  var toggleViews = function(recentView, nextView) {
    recentView.style.zIndex = 1;
    nextView.style.zIndex = 100;
  }

  loadCanvas();

};

module.exports = Map;

/***/ }),
/* 3 */
/***/ (function(module, exports) {



/***/ }),
/* 4 */
/***/ (function(module, exports) {

var Game = function(data, Player, Pokemon, aButton){
  console.log('data',data);

  this.unusedPokemon = data;
  this.player = new Player;
  this.grassOpponant = new Player;
  this.gymOpponat1 = new Player;
  this.gymOpponat2 = new Player;

};

Game.prototype = {

    playerPicksPokemon: function(pokeName){
      for (var i = 0; i < this.unusedPokemon.length; i++) {
        if (this.unusedPokemon[i].name === pokeName) {
          var pickedPokemon = this.unusedPokemon[i];
          pickedPokemon.fightHp = pickedPokemon.hp
          this.player.pokemonOnHand.push(pickedPokemon);
          this.unusedPokemon.splice(i, 1);
          console.log('i', i);
        }
      }
    },

    populateOpponant: function(opponant, numOfEnemies){
      ///////////////////////////////////////////
      //                                       //
      // MISSING CASE WHEN YOU CAUGHT THEM ALL //        
      //                                       //
      ///////////////////////////////////////////
      for(i = 0; i < numOfEnemies; i++){
        var takenPokemon = this.unusedPokemon.splice(Math.floor(Math.random()*this.unusedPokemon.length), 1)[0];
        takenPokemon.fightHp = takenPokemon.hp;
        opponant.pokemonOnHand.push(takenPokemon);
      }
    },

    calcDamage: function(attaker, defender){
      var base = 20;
      var bonus = Math.round((attaker.attack - defender.defense)/3);
      console.log('bonus', bonus);
      var random = Math.random()*(1.2 - 0.8) + 0.8;
      console.log('rand', random);
      var damage = Math.round(base * random) + bonus;
      if (damage < 0) {
        damage = 0;
      }
      return damage;
    },

    fight: function(player, opponant, callback) {
      if (player.turn === true) {
        var damage = callback(player.pokemonOnHand[0], opponant.pokemonOnHand[0]);
        console.log('damage', damage);
        console.log('initial hp', opponant.pokemonOnHand[0].fightHp);
        opponant.pokemonOnHand[0].fightHp -= damage;
        if (opponant.pokemonOnHand[0].fightHp <= 0) {
          opponant.pokemonOnHand[0].fightHp = 0;
        }
        console.log('after hp', opponant.pokemonOnHand[0].fightHp);
        player.turn = false;
        opponant.turn = true;
      }
      else {
        var damage = callback(opponant.pokemonOnHand[0], player.pokemonOnHand[0]);
        console.log('damage', damage);
        console.log('initial hp', player.pokemonOnHand[0].fightHp);
        player.pokemonOnHand[0].fightHp -= damage;
        if (player.pokemonOnHand[0].fightHp <= 0) {
          player.pokemonOnHand[0].fightHp = 0;
        }
        console.log('after hp', player.pokemonOnHand[0].fightHp);
        player.turn = true;
        opponant.turn = false;
      }
    },

    checkForFainted: function(player) {
      if (player.pokemonOnHand[0].fightHp === 0) {
        var faintedPokemon = player.pokemonOnHand[0];
        player.faintedPokemons.push(faintedPokemon);
        player.pokemonOnHand.splice(0, 1);
      }
    },

    getFaintedPokemon: function(player, opponant) {
      if (opponant.pokemonOnHand.length === 0) {
        var faintedPokemon = opponant.faintedPokemons[0];
        player.pokedex.push(faintedPokemon);
        opponant.faintedPokemons.splice(0, 1);
      }
    }

  };


module.exports = Game;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


var Player = __webpack_require__(0);
var Pokemon = __webpack_require__(1);
var Map = __webpack_require__(2);
var UI = __webpack_require__(3);

var app = function() {
 
  // new UI();
 

  var makeRequest = function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  };

  var allPokemon = function(){
    makeRequest("http://localhost:3000/sourcePokemons", function(){
      if(this.status !== 200) return;
        var jsonString = this.responseText;
        var jsonObject = JSON.parse(jsonString);


        var pokemonData = jsonObject;
        new Map(pokemonData, Player, Pokemon);
      });
  }

  allPokemon();
}



window.onload = app();

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map