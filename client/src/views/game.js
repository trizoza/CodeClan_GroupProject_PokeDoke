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