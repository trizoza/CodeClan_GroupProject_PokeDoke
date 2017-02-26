var game = require('./views/game');
var Player = require('./models/player');
var Map = require('./views/map')

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
        new Map(pokemonData);
      });
  }

  allPokemon();
}

window.onload = app;