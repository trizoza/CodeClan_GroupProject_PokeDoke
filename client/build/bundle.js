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
/******/ 	return __webpack_require__(__webpack_require__.s = 244);
/******/ })
/************************************************************************/
/******/ ({

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

var Player = __webpack_require__(135);
var Pokemon = __webpack_require__(245);


var game = function(data){
  console.log('data',data);

  var unusedPokemon = data;
  console.log(unusedPokemon);

  var player = new Player;
  console.log('player:', player);

  var opponant = new Player;
  console.log('opponant:', opponant);

  unusedPokemon.sort(function (a, b) {
      return parseFloat(a.id) - parseFloat(b.id);
  });
  console.log('array sorted', unusedPokemon);
  console.log('array sorted', unusedPokemon.length);

  var playerPicksPokemon = function(pokeName){
    for (var i = 0; i < unusedPokemon.length; i++) {
      if (unusedPokemon[i].name === pokeName) {
        player.pokemonOnHand.push(unusedPokemon[i]);
      }
    }
  };

  var populateOpponant = function(opponant, numOfEnemies){
    for(i = 0; i <= numOfEnemies; i++){
      var takenPokemon = unusedPokemon.splice(Math.floor(Math.random()*unusedPokemon.length), 1)[0];
      takenPokemon.fightHp = takenPokemon.hp;
      opponant.pokemonOnHand.push(takenPokemon);
    }
  }

  var calcDamage = function(attaker, defender){
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
  }

  // playerPicksPokemon("pikachu");
  // populateOpponant(opponant, 3);

  console.log('opponant: number of pokemon', opponant.pokemonOnHand.length, opponant.pokemonOnHand[0], opponant.pokemonOnHand[1], opponant.pokemonOnHand[2] );
  console.log('player: number of pokemon', player.pokemonOnHand.length, 'pokemon name', player.pokemonOnHand[0]);
  console.log('test damage calc', unusedPokemon[2].attack, unusedPokemon[3].defense);
  console.log('test damage', calcDamage(unusedPokemon[2], unusedPokemon[3]));
}


// Game.prototype = {


//   //finds which trainer in fight has least pokemon to check if 0 (instead of checking both in fight)
//   getLeastPokemon: function(playersPokemonAlive, opponantsPokemonAlive){
//     var leastPokemon = 0;
//     if(playersPokemonAlive.length > opponantsPokemonAlive.length){
//       leastPokemon = opponant.pokemonOnHand.length;
//     } else {
//       leastPokemon = player.pokemonOnHand.length;
//     };
//     return leastPokemon
//   },
//   //finds which pokemon in fight has least health to check if 0 (instead of checking both in fight)
//   getLeastHealth: function(playersFightingPokemon, opponantsFightingPokemon){
//     var leastHealth =100;
//     if(playersFightingPokemon.fightHp > opponantsFightingPokemon.fightHp){
//       leastHp = {fighter: 'opponant', pokemon: opponantsFightingPokemon.name}
//     } else {
//       leastHp = {fighter: 'player', pokemon: playersFightingPokemon.name}
//     };
//     return leastHp;
//   },

//   fight: function(player, opponant, numOfEnemies){

//     //create opponant
//     var opponant = new Player;
//     console.log('opponant', opponant);
//     //push random unused Pokemon to opponant
//     opponant.pokemonOnHand = populateOpponant(opponant, numOfEnemies);
//     console.log('opponant has ' + opponant.pokemonOnHand.length + ' pokemon');
//     //pokemon left able to fight
//     var playersPokemonAlive = player.pokemonOnHand;
//     var opponantsPokemonAlive = opponant.pokemonOnHand;
//     //pokemon currently fighting
//     var playersFightingPokemon = playersPokemonAlive[0];
//     console.log('player chose ' + playersFightingPokemon.name);
//     //todo: update message and setTimeout until button pressed
//     var opponantsFightingPokemon = opponantsPokemonAlive[0];
//     console.log('opponant chose ' + opponantsFightingPokemon.name);
//     //todo: update message and setTimeout until button pressed
//     //set fight hp so original hp is not overwritten during fight
//     playersFightingPokemon.fightHp =  playersFightingPokemon.hp;
//     opponantsFightingPokemon.fightHp =  opponantsFightingPokemon.hp;

//     //number of pokemon of currently loosing player - if 0 fight is over
//     var leastPokemonLeft = getLeastPokemon(playersPokemonAlive, opponantsPokemonAlive);
//     // finds pokemon of least health & returns an object containing pokemon of least health and their owner, so can be removed from alive pokemon when health becomes zero. Then next is used
//     var leastHp = getLeastHealth(playersFightingPokemon, opponantsFightingPokemon);
//     //player takes first turn
//     var playersTurn = true;
//     //unless someone has no pokemon do loop
//     for(i = leastPokemonLeft; i>0; i = leastPokemonLeft){
//       //unless pokemon has no health do loop
//       for(j = leastHp.pokemon.fightHp; j>0; j = leastHp.pokemon.fightHp){
//         //choose who attacks
//         if (playersTurn){
//           //todo: update message and setTimeout until button pressed
//           makeAttack(playersFightingPokemon,opponantsFightingPokemon);
//           opponantsFightingPokemon.fightHp -= damage;
//           console.log(playersFightingPokemon.name + ' used ' + playersFightingPokemon.move + ' and did ' + damage + ' damage');
//           //todo: update message and setTimeout until button pressed
//           playersTurn = false;
//         }else if(!playersTurn){
//           makeAttack(opponantsFightingPokemon,playersFightingPokemon);
//           playersFightingPokemon.fightHp -= damage;
//           console.log(playersFightingPokemon.name + ' used ' + playersFightingPokemon.move + ' and did ' + damage + ' damage');
//           //todo: update message and setTimeout until button pressed
//           playersTurn = true;
//         } else{
//           console.log('error taking turns');
//         }
//         //update pokemon with least health
//         leastHp = getLeastHealth(playersFightingPokemon, opponantsFightingPokemon);
//         if (leastHp.pokemon.fightHp <= 0){
//           console.log(leastHp.pokemon.name + 'fell unconcious');
//           //todo: update message and setTimeout until button pressed
//         }
//         //end of hp check loop
//       }
//       //when a pokemon looses all health remove from alive pokemon
//       if (leastHp.fighter == 'player'){
//         playersPokemonAlive.shift()
//         //uses next pokemon (still first because old first is removed)
//         playersFightingPokemon = playersPokemonAlive[0];
//       }else if(leastHp.fighter == 'opponant'){
//         opponantsPokemonAlive.shift()
//         opponantsFightingPokemon = opponantsPokemonAlive[0];
//       }else{
//         console.log('error removing unconcious pokemon');
//       }
//       //update player with least pokemon
//       leastPokemonLeft = getLeastPokemon(playersPokemonAlive, opponantsPokemonAlive);
//     }
//   },
//   makeAttack: function(attaker, defender){
//     defender.fightHp = defender.fightHp - calcDamage(attaker, defender);
//     return defender.fightHp
//   },
  



// } 





module.exports = game;



/***/ }),

/***/ 135:
/***/ (function(module, exports) {

var Player = function(){
  this.name = "";
  this.pokedex = [];//unlimited
  this.pokemonOnHand = []//4x
  this.pic = ""//url
  this.x = 2//600
  this.y = 2//600

}

Player.prototype = {
  getPokemon: function(pokemon, source, destination){
    this.destination.push(source[pokemon]);
  }

};

module.exports = Player;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var game = __webpack_require__(134);
var Player = __webpack_require__(135);

var app = function() {
 

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
        game(pokemonData);
      });
  }

  allPokemon();
}



window.onload = app();





/***/ }),

/***/ 245:
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


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map