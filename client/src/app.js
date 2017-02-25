var game = require('./models/game');
var Player = require('./models/player');
var Map = require('./views/map');
var UI = require('./views/ui');

var app = function() {
 
  // new UI();
  new Map();

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