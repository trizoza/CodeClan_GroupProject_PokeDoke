var Player = function(playerObj){
  this.name = playerObj.name;
  this.pokedex = playerObj.pokedex || [];//unlimited
  this.pokemon_on_hand = playerObj.pokemon_on_hand//4x
  this.pic = playerObj.pic//url
  this.x = playerObj.x//600
  this.y = playerObj.y//600
}