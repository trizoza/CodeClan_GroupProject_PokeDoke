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

  var game = new Game(pokemonData, Player, Pokemon);
  var welcomeScreen = document.querySelector('#welcomeScreen');
  var chooseScreen = document.querySelector('#choose_screen');
  var fightScreen = document.querySelector('#fight_screen');
  var homeScreen = document.querySelector('#home_screen');
  var craigScreen = document.querySelector('#craig_screen');
  var mapCanvas = document.querySelector("#map");

  var context = mapCanvas.getContext('2d');

  var x = 80;
  var y = 440;

  var increment = 10;
  var ashDown = document.createElement('img');
  ashDown.src = "/img/ash_down.png";
  var ashUp = document.createElement('img');
  ashUp.src = "/img/ash_up.png";
  var ashRight = document.createElement('img');
  ashRight.src = "/img/ash_right.png";
  var ashLeft = document.createElement('img');
  ashLeft.src = "/img/ash_left.png";
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
  var craig = document.createElement('img');
  craig.src = "img/craig.png";
  var upButton = document.querySelector('#up-button');
  var downButton = document.querySelector('#down-button');
  var leftButton = document.querySelector('#left-button');
  var rightButton = document.querySelector('#right-button');
  var aButton = document.querySelector('#a-button');
  var nameSubmitButton = document.querySelector('#submit_name');
  var fightOpponant;
  var aCount = 0;


  

  loadCanvas = function() {
    pavement.onload = function() {
      context.drawImage(this, 0, 0, 580, 460);
      ashDown.onload = function() {
        context.drawImage(this, x - 20, y - 20, ashWidth, ashHeight);
      };
      ashUp.onload = function() {
        context.drawImage(this, 1000, 1000, ashWidth, ashHeight);
      };
      ashLeft.onload = function() {
        context.drawImage(this, 1000, 1000, ashWidth, ashHeight);
      };
      ashRight.onload = function() {
        context.drawImage(this, 1000, 1000, ashWidth, ashHeight);
      };
      craig.onload = function() {
        context.drawImage(this, 220, 280, ashWidth, ashHeight);
      };
      house.onload = function() {
        context.drawImage(this, 0, 270, 150, 130);
      };
      gym.onload = function() {
        context.drawImage(this, 0, 0, 220, 170);
        context.drawImage(this, 360, 0, 220, 170);
      };
      grass.onload = function() {
        context.drawImage(this, 540, 400, 40, 60);
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
      drawMap();
      context.drawImage(ashDown, x - 20, y - 20, ashWidth, ashHeight);
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
    context.drawImage(craig, 220, 280, ashWidth, ashHeight);
  };

  var moveAsh = function(directionPic, xInc, yInc) {
    drawMap();
    context.drawImage(directionPic, x - 20 + xInc, y - 20 + yInc, ashWidth, ashHeight);
    x += xInc;
    y += yInc;
    console.log(x,y);
    aCount = 0;
    checkIfInGrass();
  };

  document.onkeydown = function(event) {
    console.log(event.keyCode);
    if (mapCanvas.style.zIndex == 100) {

      if (event.keyCode === 39) {
        // right
        if (x >= 560) {
          moveAsh(ashRight, 0, 0);
        }
        else if (x === 340 && 20 <= y && y <= 180) {
          moveAsh(ashRight, 0, 0);
        }
        else if (x === 200 && 270 <= y && y <= 330) {
          moveAsh(ashRight, 0, 0);
        }
        else{
          moveAsh(ashRight, increment, 0);
        }
      }

      if (event.keyCode === 37) {
        // left

        if (x <= 20) {
          moveAsh(ashLeft, 0, 0);
        }
        else if (x === 240 && 20 <= y && y <= 180) {
          moveAsh(ashLeft, 0, 0);
        }
        else if (x === 170 && 260 <= y && y <= 410) {
          moveAsh(ashLeft, 0, 0);
        }
        else if (x === 280 && 270 <= y && y <= 330) {
          moveAsh(ashLeft, 0, 0);
        }
        else{
          moveAsh(ashLeft, -increment, 0);
        }
      }

      if (event.keyCode === 38) {
        // up

        if (y <= 20) {
          moveAsh(ashUp, 0, 0);
        }
        else if (y === 420 && 20 <= x && x <= 160) {
          moveAsh(ashUp, 0, 0);
        }
        else if (y === 190 && 20 <= x && x <= 230) {
          moveAsh(ashUp, 0, 0);
        }
        else if (y === 190 && 350 <= x && x <= 560) {
          moveAsh(ashUp, 0, 0);
        }
        else if (y === 340 && 210 <= x && x <= 270) {
          moveAsh(ashUp, 0, 0);
        }
        else {
          moveAsh(ashUp, 0, -increment);
        }
      }

      if (event.keyCode === 40) {
        // down

        if (y >= 440) {
          moveAsh(ashDown, 0, 0);
        }
        else if (y === 250 && 20 <= x && x <= 160) {
          moveAsh(ashDown, 0, 0);
        }
        else if (y === 260 && 210 <= x && x <= 270) {
          moveAsh(ashDown, 0, 0);
        }
        else {
          moveAsh(ashDown, 0, increment);
        }
      }

      //////////// ENTER HOME ////////////////////////////////////////////////////////////////////////
      if (event.keyCode === 72) {
        // h
        if ((x === 50 || x===60) && y === 420) {
          toggleViews(mapCanvas, homeScreen);
          atHome();
        }

      }


    }
    
  };


  var initiateFight = function(opponant){
    if (game.player.pokemonOnHand.length >= 1 && opponant.pokemonOnHand.length >= 1) {
      console.log(opponant);
      toggleViews(mapCanvas, fightScreen);

     fightScreen.innerHTML = "<img id='playerPokemon' src="+ game.player.pokemonOnHand[0].back_picture+ "></img><p id='player_name'>"+game.player.name+"</p><p id='player_pok_name'>"+game.player.pokemonOnHand[0].name+"</p><progress id='player_pok_hp' value="+game.player.pokemonOnHand[0].fightHp+" max="+game.player.pokemonOnHand[0].hp+"></progress></p><img id='opponantPokemon' src="+ opponant.pokemonOnHand[0].front_picture+"></img><p id='opponant_pok_name'>"+opponant.pokemonOnHand[0].name+"</p><progress id='opponant_pok_hp' value="+opponant.pokemonOnHand[0].fightHp+" max="+opponant.pokemonOnHand[0].hp+"></progress><img id='fight_textbox' src='/img/message.png'></img>";
     fightScreen.innerHTML += "<p id='move_text'>Your "+game.player.pokemonOnHand[0].name+" fights against "+opponant.pokemonOnHand[0].name+"!</p>"
    }
  }


  ///////////// GRASS FIGHT ON /////////////////////////////////////////////////////////////////
  var checkIfInGrass = function() {

    if (x >= 260 && y >= 280) {

      var randNum = Math.ceil(Math.random()*(10 - 0));      

      if (randNum === 10) {
        randNum = 0;
        console.log('you are being attacked');
        aCount = 1;
        fightOpponant = game.grassOpponant;
        initiateFight(fightOpponant);
        console.log(fightOpponant);
        

      }
    }


    if(x==90 && y==190){
      fightLocation = "gym1";
      fightOpponant = game.gymOpponant1;

      console.log(fightOpponant);
    }


    if(x==450 && y==190){
      fightLocation = "gym2";
      fightOpponant = game.gymOpponant2;

      console.log(fightOpponant);
    }
  }
  ///////////// GRASS FIGHT OVER /////////////////////////////////////////////////////////////////



  //////////// AT HOME ////////////////////////////////////////////////////////////////////////

  var atHome = function() {
    ////////////// REVIVE FAINTED POKEMONS //////////////////////////////////////////////////////
    game.revivePokemons(game.player);

    //////////////// SETUP HTML //////////////////////////////////////////////////////////////////
    homeScreen.innerHTML = "";
    var welcomeAtHome = document.createElement('p');
    welcomeAtHome.innerText = "Welcome home " + game.player.name + "! Here you can take a rest and let your Pokémon rest too. Once you leave home, your Pokémon will be again strong and healthy. Press A to hit the world!";
    homeScreen.appendChild(welcomeAtHome);


    //////////////////////// POKEDEX SELECTION ///////////////////////////////////////////////////
    var selectionContainer = document.createElement('div');
    homeScreen.appendChild(selectionContainer);
    var pokedexSelection = document.createElement('select');
    
    var populateSelectionDropDown = function () {
      if (game.player.pokedex.length >=1) {
        selectionContainer.innerHTML = "";
        var selectionAdvice = document.createElement('p');
        selectionAdvice.innerText = "Choose a Pokémon from Pokedex";
        selectionContainer.appendChild(selectionAdvice);
        selectionContainer.appendChild(pokedexSelection);
        var predefinedPokeOption = document.createElement('option');
        predefinedPokeOption.innerText = "...";
        pokedexSelection.innerHTML = "";
        pokedexSelection.appendChild(predefinedPokeOption);
        for(var each of game.player.pokedex) {
          var pokeOption = document.createElement('option');
          pokeOption.innerText = each.name;
          pokedexSelection.appendChild(pokeOption);
        }
      }
      else {
        selectionContainer.innerHTML = "";
        var selectionAdvice = document.createElement('p');
        selectionAdvice.innerText = "Pokedex empty";
        selectionContainer.appendChild(selectionAdvice);
      }
    }

    populateSelectionDropDown();

    var pokemonDetails = document.createElement('div');
    homeScreen.appendChild(pokemonDetails);

    var handleSelectChange = function(event) {
      pokemonDetails.innerHTML="";
      var p = document.createElement('p');
      var img = document.createElement('img');
      var nameOfSelectedPokemon = "";
      for(var each of game.player.pokedex) {
        if (each.name === this.value) {
          p.innerText += "Name: " + each.name;
          nameOfSelectedPokemon = each.name;
          p.innerText += "\nHP: " + each.hp;
          p.innerText += "\nAttack: " + each.attack;
          p.innerText += "\nDefense: " + each.defense;
          img.src = each.front_picture;
        }
      }
      pokemonDetails.appendChild(img);
      pokemonDetails.appendChild(p);
      var addToHandButton = document.createElement('button');
      addToHandButton.innerText = "Add on hand"
      pokemonDetails.appendChild(addToHandButton);

      var handleButtonClick = function(){
        if (game.player.pokedex.length >= 1) {
          for(var i = 0; i < game.player.pokedex.length; i++) {
            if (game.player.pokedex[i].name === nameOfSelectedPokemon) {
              if (game.player.pokemonOnHand.length < 6) {
                game.player.pokemonOnHand.push(game.player.pokedex[i]);
                game.player.pokedex.splice(i, 1);
                pokemonDetails.innerHTML="";
              }
            }
          }
        }
        populateSelectionDropDown();
        generatePokemonOnHandOnScreen();
      }
      addToHandButton.onclick = handleButtonClick;
      console.log('event', event);
    }

    pokedexSelection.onchange = handleSelectChange;
    //////////////// AT HOME END OF POKEDEX SELECTION /////////////////////////////

    //////////////// AT HOME START OF POKEMON ON HAND /////////////////////////////
    var handShowContainer = document.createElement('div');
    homeScreen.appendChild(handShowContainer);
    var generatePokemonOnHandOnScreen = function() {



        handShowContainer.innerHTML = "";
        var pok0img = document.createElement('img');
        var pok1img = document.createElement('img');
        var pok2img = document.createElement('img');
        var pok3img = document.createElement('img');
        var pok4img = document.createElement('img');
        var pok5img = document.createElement('img');
        var populatePokemonPics = function() {
          handShowContainer.innerHTML = "";
          if (game.player.pokemonOnHand.length === 6) {
            pok0img.src = game.player.pokemonOnHand[0].front_picture;
            pok0img.onload = function() {
              handShowContainer.appendChild(pok0img);
            }
            pok1img.src = game.player.pokemonOnHand[1].front_picture;
            handShowContainer.appendChild(pok1img);
            pok2img.src = game.player.pokemonOnHand[2].front_picture;
            handShowContainer.appendChild(pok2img);
            pok3img.src = game.player.pokemonOnHand[3].front_picture;
            handShowContainer.appendChild(pok3img);
            pok4img.src = game.player.pokemonOnHand[4].front_picture;
            handShowContainer.appendChild(pok4img);
            pok5img.src = game.player.pokemonOnHand[5].front_picture;
            handShowContainer.appendChild(pok5img);
          }
          else if (game.player.pokemonOnHand.length === 5) {
            pok0img.src = game.player.pokemonOnHand[0].front_picture;
            handShowContainer.appendChild(pok0img);
            pok1img.src = game.player.pokemonOnHand[1].front_picture;
            handShowContainer.appendChild(pok1img);
            pok2img.src = game.player.pokemonOnHand[2].front_picture;
            handShowContainer.appendChild(pok2img);
            pok3img.src = game.player.pokemonOnHand[3].front_picture;
            handShowContainer.appendChild(pok3img);
            pok4img.src = game.player.pokemonOnHand[4].front_picture;
            handShowContainer.appendChild(pok4img);
          }
          else if (game.player.pokemonOnHand.length === 4) {
            pok0img.src = game.player.pokemonOnHand[0].front_picture;
            handShowContainer.appendChild(pok0img);
            pok1img.src = game.player.pokemonOnHand[1].front_picture;
            handShowContainer.appendChild(pok1img);
            pok2img.src = game.player.pokemonOnHand[2].front_picture;
            handShowContainer.appendChild(pok2img);
            pok3img.src = game.player.pokemonOnHand[3].front_picture;
            handShowContainer.appendChild(pok3img);
          }
          else if (game.player.pokemonOnHand.length === 3) {
            pok0img.src = game.player.pokemonOnHand[0].front_picture;
            handShowContainer.appendChild(pok0img);
            pok1img.src = game.player.pokemonOnHand[1].front_picture;
            handShowContainer.appendChild(pok1img);
            pok2img.src = game.player.pokemonOnHand[2].front_picture;
            handShowContainer.appendChild(pok2img);
          }
          else if (game.player.pokemonOnHand.length === 2) {
            pok0img.src = game.player.pokemonOnHand[0].front_picture;
            pok0img.onload = function() {
              handShowContainer.appendChild(pok0img);
            }
            pok1img.src = game.player.pokemonOnHand[1].front_picture;
            pok1img.onload = function() {
              handShowContainer.appendChild(pok1img);
            }
          }
          else if (game.player.pokemonOnHand.length === 1) {
            pok0img.src = game.player.pokemonOnHand[0].front_picture;
            pok0img.onload = function() {
              handShowContainer.appendChild(pok0img);
            }
          }
        }
        

        populatePokemonPics();

        

        pok0img.onclick = function() {
          var pokemonToBeMoved = game.player.pokemonOnHand[0];
          game.player.pokedex.push(pokemonToBeMoved);
          game.player.pokemonOnHand.splice(0, 1);
          populateSelectionDropDown();
          populatePokemonPics();
        }
        pok1img.onclick = function() {
          var pokemonToBeMoved = game.player.pokemonOnHand[1];
          game.player.pokedex.push(pokemonToBeMoved);
          game.player.pokemonOnHand.splice(1, 1);
          populateSelectionDropDown();
          populatePokemonPics();
        }
        pok2img.onclick = function() {
          var pokemonToBeMoved = game.player.pokemonOnHand[2];
          game.player.pokedex.push(pokemonToBeMoved);
          game.player.pokemonOnHand.splice(2, 1);
          populateSelectionDropDown();
          populatePokemonPics();
        }
        pok3img.onclick = function() {
          var pokemonToBeMoved = game.player.pokemonOnHand[3];
          game.player.pokedex.push(pokemonToBeMoved);
          game.player.pokemonOnHand.splice(3, 1);
          populateSelectionDropDown();
          populatePokemonPics();
        }
        pok4img.onclick = function() {
          var pokemonToBeMoved = game.player.pokemonOnHand[4];
          game.player.pokedex.push(pokemonToBeMoved);
          game.player.pokemonOnHand.splice(4, 1);
          populateSelectionDropDown();
          populatePokemonPics();
        }
        pok5img.onclick = function() {
          var pokemonToBeMoved = game.player.pokemonOnHand[5];
          game.player.pokedex.push(pokemonToBeMoved);
          game.player.pokemonOnHand.splice(5, 1);
          populateSelectionDropDown();
          populatePokemonPics();
        }

    }
    
    generatePokemonOnHandOnScreen();
        

    /////////////// AT HOME END OF POKEMON ON HAND /////////////////////////////////

    ///////////////////////// LEAVE HOME ////////////////////////////////////

  };
  //////////// END OF AT HOME ////////////////////////////////////////////////////////////////////////


  //////////////////////// WITH CRAIG ////////////////////////////////////////////
  var withCraig = function() {
    craigScreen.innerHTML = "<p>Hi "+game.player.name+"! My name is Craig! Welcome to Edinburgh, but be careful, the Meadows are full of wild Pokémon and there also some tough trainers in our gyms!</p>";
  }





  //////////////// BUTTONS ///////////////////////////////////////////////////////////////////////
  upButton.onclick = function(){
    if (y <= 20) {
      moveAsh(ashUp, 0, 0);
    }
    else if (y === 420 && 20 <= x && x <= 160) {
      moveAsh(ashUp, 0, 0);
    }
    else if (y === 190 && 20 <= x && x <= 230) {
      moveAsh(ashUp, 0, 0);
    }
    else if (y === 190 && 350 <= x && x <= 560) {
      moveAsh(ashUp, 0, 0);
    }
    else {
      moveAsh(ashUp, 0, -increment);
    }
  }

  downButton.onclick = function(){
    if (y >= 440) {
      moveAsh(ashDown, 0, 0);
    }
    else if (y === 250 && 20 <= x && x <= 160) {
      moveAsh(ashDown, 0, 0);
    }
    else {
      moveAsh(ashDown, 0, increment);
    }
  }

  leftButton.onclick = function(){
    if (x <= 20) {
      moveAsh(ashLeft, 0, 0);
    }
    else if (x === 240 && 20 <= y && y <= 180) {
      moveAsh(ashLeft, 0, 0);
    }
    else if (x === 170 && 260 <= y && y <= 410) {
      moveAsh(ashLeft, 0, 0);
    }
    else{
      moveAsh(ashLeft, -increment, 0);
    }
  }

  rightButton.onclick = function(){
    if (x >= 560) {
      moveAsh(ashRight, 0, 0);
    }
    else if (x === 340 && 20 <= y && y <= 180) {
      moveAsh(ashRight, 0, 0);
    }
    else{
      moveAsh(ashRight, increment, 0);
    }
  }

  aButton.onclick = function(){
    ////////////////////////////////////////////
    if ((x == 90 || x == 450) && y == 190){
      initiateFight(fightOpponant);
    }
    ////////////////////////////////////////////

    ///////////////////IN FIGHT////////////////////////

    if (fightScreen.style.zIndex == 100 ) {

      if (game.player.pokemonOnHand.length >= 1 && fightOpponant.pokemonOnHand.length >= 1) {

        if (fightOpponant == game.grassOpponant){
          game.fight(game.player, fightOpponant, game.calcDamage);
          console.log('fight called');
        }

        fightScreen.innerHTML = "<img id='playerPokemon' src="+ game.player.pokemonOnHand[0].back_picture+ "></img><p id='player_name'>"+game.player.name+"</p><p id='player_pok_name'>"+game.player.pokemonOnHand[0].name+"</p><progress id='player_pok_hp' value="+game.player.pokemonOnHand[0].fightHp+" max="+game.player.pokemonOnHand[0].hp+"></progress><img id='opponantPokemon' src="+ fightOpponant.pokemonOnHand[0].front_picture+"></img><p id='opponant_pok_name'>"+fightOpponant.pokemonOnHand[0].name+"</p><progress id='opponant_pok_hp' value="+fightOpponant.pokemonOnHand[0].fightHp+" max="+fightOpponant.pokemonOnHand[0].hp+"></progress> <img id='fight_textbox' src='/img/message.png'></img>";

        if (game.player.turn == true) {
         fightScreen.innerHTML += "<p id='move_text'>Your "+game.player.pokemonOnHand[0].name+" used "+game.player.pokemonOnHand[0].move+" against "+fightOpponant.pokemonOnHand[0].name+"!</p>";
        } 
        else {
         fightScreen.innerHTML += "<p id='move_text'>"+fightOpponant.pokemonOnHand[0].name+" used "+fightOpponant.pokemonOnHand[0].move+" against your"+game.player.pokemonOnHand[0].name+"!</p>";
        }
        

        //////////////////////////////////////
        aCount = 1;
        if (fightOpponant !== game.grassOpponant && aCount == 1){
          game.fight(game.player, fightOpponant, game.calcDamage);
          console.log('fight called');
        }
        ///////////////////////////////////////
        
        game.checkForFainted(game.player);
        game.checkForFainted(fightOpponant);

        console.log('aButton in fight has been clicked');
      }

      else {
        if(fightOpponant == game.grassOpponant){
          game.getFaintedPokemon(game.player, game.grassOpponant);
        }
        console.log('player', game.player)
        toggleViews(fightScreen, mapCanvas);
        
      }

    }

    ///////////// IN HOME /////////////////

    else if (homeScreen.style.zIndex == 100) {
      toggleViews(homeScreen, mapCanvas);
      console.log('zIndex of home', mapCanvas.style.zIndex);
      console.log('aButton has been clicked in house');


    }

    ////////////// ON MAP ///////////////////
    else if (mapCanvas.style.zIndex == 100) {
      /////////// STARTS THE GYM FIGHTS ///////////////////
      


      /////////////////////////////////////////////////////

      if (x === 50 && y === 420) {
        toggleViews(mapCanvas, homeScreen);
        atHome();
        console.log('zIndex of mapCanvas', mapCanvas.style.zIndex);
      }
      ////////////// AROUND CRAIG ///////////////
      if (x === 240 && y === 340) {
        toggleViews(mapCanvas, craigScreen);
        withCraig();
      }
    }

    /////////////// WITH CRAIG //////////////////
    else if (craigScreen.style.zIndex == 100) {
      toggleViews(craigScreen, mapCanvas);
    }

  }
  ////////////// END OF ABUTTON //////////////////////


/////////// 01 WELCOME SCREEN ////////////////  
nameSubmitButton.onclick = function() {
  var nameToAdd = document.querySelector('#name_to_add');
  game.player.setPlayersName(nameToAdd.value);
  //////

  game.populateOpponant(game.grassOpponant, 1);
  game.populateOpponant(game.gymOpponant1, 3);
  game.populateOpponant(game.gymOpponant2, 3);
  console.log('opponants pokemon', game.grassOpponant.pokemonOnHand[0]);

  toggleViews(welcomeScreen, chooseScreen);

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
   game.playerPicksPokemon("blastoise");
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
  console.log(aCount)
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

var Game = function(data, Player, Pokemon){
  console.log('data',data);

  this.unusedPokemon = data;
  this.player = new Player;
  this.grassOpponant = new Player;
  this.gymOpponant1 = new Player;
  this.gymOpponant2 = new Player;
 

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
        console.log(this);
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
      if (damage < 10) {
        damage = 10;
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
        for (var i = 0; i < opponant.faintedPokemons.length; i++) {
          var pokemonToBeMoved = opponant.faintedPokemons[i];
          player.pokedex.push(pokemonToBeMoved);
          opponant.faintedPokemons.splice(0, 1);
          console.log('players pokedex', player.pokedex);
          console.log('players hand', player.pokemonOnHand);
        }
        this.setTurnTrue(player, this.grassOpponant);
      }
      console.log('fainted - populate');
     
      if(opponant.pokemonOnHand.length == 0){
        this.populateOpponant(opponant, 1);
      }

    },

    revivePokemons: function(player) {
      if (player.faintedPokemons.length > 0) {
        for (var i = 0; i < player.faintedPokemons.length; i++) {
          player.faintedPokemons[i].fightHp = player.faintedPokemons[i].hp;
          var revivedPokemon = player.faintedPokemons[i];
          player.pokemonOnHand.push(revivedPokemon);
        }
        player.faintedPokemons.splice(0, player.faintedPokemons.length);
      }
      if (player.pokedex.length > 0) {
        for (var each of player.pokedex) {
          each.fightHp = each.hp;
        }
      }
      if (player.pokemonOnHand.length > 0) {
        for (var each of player.pokemonOnHand) {
          each.fightHp = each.hp;
        }
      }
    },

    setTurnTrue: function(player, opponant) {
      player.turn = true;
      opponant.turn = false;
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