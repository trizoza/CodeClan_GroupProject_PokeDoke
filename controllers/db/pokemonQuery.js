const { returnPokemons } = require('./populateOriginalPokemons')

var PokemonQuery = function () {
};

PokemonQuery.prototype = {
  all: function (onQueryFinished) {
    returnPokemons()
      .then(res => {
        console.log(res)
        onQueryFinished(res)
      })
      .catch(err => {
        console.log('err ', err)
      })
  }
}



module.exports = PokemonQuery;