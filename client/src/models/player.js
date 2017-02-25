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