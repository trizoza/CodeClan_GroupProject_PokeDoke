var Player = require('./player');


var Game = function(){
  this.player = new Player();
  this.unusedPokemon = [];
  var self = this;
}

Game.prototype = {
  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  },

  allPokemon: function(callback){
    this.makeRequest("http://localhost:3000/sourcePokemons", function(){
      if(this.status !== 200) return;
        var jsonString = this.responseText;
        var results = jsonString;
        unusedPokemon = results;
      });
  },
  //finds which trainer in fight has least pokemon to check if 0 (instead of checking both in fight)
  getLeastPokemon: function(playersPokemonAlive, opponantsPokemonAlive){
    var leastPokemon =0;
    if(playersPokemonAlive.length > opponantsPokemonAlive.length){
      leastPokemon = opponant.pokemonOnHand.length;
    } else {
      leastPokemon = player.pokemonOnHand.length;
    };
    return leastPokemon
  },
  //finds which pokemon in fight has least health to check if 0 (instead of checking both in fight)
  getLeastHealth: function(playersFightingPokemon, opponantsFightingPokemon){
    var leastHealth =100;
    if(playersFightingPokemon.fightHp > opponantsFightingPokemon.fightHp){
      leastHp = {fighter: 'opponant', pokemon: opponantsFightingPokemon.name}
    } else {
      leastHp = {fighter: 'player', pokemon: playersFightingPokemon.name}
    };
    return leastHp;
  },

  fight: function(player, opponant, numOfEnemies){
    //create opponant
    var opponant = new Player;
    //push random unused Pokemon to opponant
    opponant.pokemonOnHand = populateOpponant(opponant, numOfEnemies);
    console.log('opponant has ' + opponant.pokemonOnHand.length + ' pokemon');
    //pokemon left able to fight
    var playersPokemonAlive = player.pokemonOnHand;
    var opponantsPokemonAlive = opponant.pokemonOnHand;
    //pokemon currently fighting
    var playersFightingPokemon = playersPokemonAlive[0];
    console.log('player chose ' + playersFightingPokemon.name);
    //todo: update message and setTimeout until button pressed
    var opponantsFightingPokemon = opponantsPokemonAlive[0];
    console.log('opponant chose ' + opponantsFightingPokemon.name);
    //todo: update message and setTimeout until button pressed
    //set fight hp so original hp is not overwritten during fight
    playersFightingPokemon.fightHp =  playersFightingPokemon.hp;
    opponantsFightingPokemon.fightHp =  opponantsFightingPokemon.hp;

    //number of pokemon of currently loosing player - if 0 fight is over
    var leastPokemonLeft = getLeastPokemon(playersPokemonAlive, opponantsPokemonAlive);
    // finds pokemon of least health & returns an object containing pokemon of least health and their owner, so can be removed from alive pokemon when health becomes zero. Then next is used
    var leastHp = getLeastHealth(playersFightingPokemon, opponantsFightingPokemon);
    //player takes first turn
    var playersTurn = true;
    //unless someone has no pokemon do loop
    for(i = leastPokemonLeft; i>0; i = leastPokemonLeft){
      //unless pokemon has no health do loop
      for(j = leastHp.pokemon.fightHp; j>0; j = leastHp.pokemon.fightHp){
        //choose who attacks
        if (playersTurn){
          //todo: update message and setTimeout until button pressed
          makeAttack(playersFightingPokemon,opponantsFightingPokemon);
          opponantsFightingPokemon.fightHp -= damage;
          console.log(playersFightingPokemon.name + ' used ' + playersFightingPokemon.move + ' and did ' + damage + ' damage');
          //todo: update message and setTimeout until button pressed
          playersTurn = false;
        }else if(!playersTurn){
          makeAttack(opponantsFightingPokemon,playersFightingPokemon);
          playersFightingPokemon.fightHp -= damage;
          console.log(playersFightingPokemon.name + ' used ' + playersFightingPokemon.move + ' and did ' + damage + ' damage');
          //todo: update message and setTimeout until button pressed
          playersTurn = true;
        } else{
          console.log('error taking turns');
        }
        //update pokemon with least health
        leastHp = getLeastHealth(playersFightingPokemon, opponantsFightingPokemon);
        if (leastHp.pokemon.fightHp == 0){
          console.log(leastHp.pokemon.name + 'fell unconcious');
          //todo: update message and setTimeout until button pressed
        }
        //end of hp check loop
      }
      //when a pokemon looses all health remove from alive pokemon
      if (leastHp.fighter == 'player'){
        playersPokemonAlive.shift()
        //uses next pokemon (still first because old first is removed)
        playersFightingPokemon = playersPokemonAlive[0];
      }else if(leastHp.fighter == 'opponant'){
        opponantsPokemonAlive.shift()
        opponantsFightingPokemon = opponantsPokemonAlive[0];
      }else{
        console.log('error removing unconcious pokemon');
      }
      //update player with least pokemon
      leastPokemonLeft = getLeastPokemon(playersPokemonAlive, opponantsPokemonAlive);
    }
  },
  makeAttack: function(attaker, defender){
    defender.fightHp = defender.fightHp - calcDamage(attaker, defender);
    return defender.fightHp
  },
  calcDamage: function(attaker, defender){
    var base = 20;
    var bonus = Math.round((attaker.attack - defender.defense)/3);
    var random = Math.round(Math.random()*(1.2 - 0.8) + 0.8);
    var damage = base*random+bonus;
    return damage;
  },

  populateOpponant: function(opponant, numOfEnemies){
    for(i = 0; i <= numOfEnemies; i++){
      opponant.pokemonOnHand.push(unusedPokemon.splice(Math.floor(Math.random()*unusedPokemon.length), 1));
      return opponant.pokemonOnHand
    }
  }

}





module.exports = Game;