var Player = function(playerObj){
  this.name = "";
  this.pokedex = [];//unlimited
  this.pokemon_on_hand = []//4x
  this.pic = ""//url
  this.x = 2//600
  this.y = 2//600

}

Player.prototype = {
  playerGetPokemon: function(pokemon, source, destination){
    this.destination.push(source[pokemon]);
  }

};

module.exports = Player;