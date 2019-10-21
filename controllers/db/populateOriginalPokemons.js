const axios = require('axios')

function returnPokemons() {
  const pokemons = []
  
  function getPokemons(index = 1) {
    let counter = 0
    let requests = []
    for (var i = index; i < (index + 50); i++) {
      counter += 1
      requests.push(axios.get("http://pokeapi.co/api/v2/pokemon/" + i))
    }
  
    return Promise.all(requests)
      .then(res => {
  
        res.forEach(({ data }) => {
          let obj = {}
          obj.name = data.forms[0].name;
          obj.id = data.id;
          obj.defense = data.stats[3].base_stat;
          obj.attack = data.stats[4].base_stat;
          obj.hp = data.stats[5].base_stat;
          obj.front_picture = data.sprites.front_default;
          obj.back_picture = data.sprites.back_default;
          obj.type = data.types[0].type.name;
          obj.move = data.moves[0].move.name;
          pokemons.push(obj)
        })
        console.log('counter ', index + counter);
        
        if ((index + counter) < 150) {
          console.log(`pokemons counter ${index}`, pokemons.length);
          return getPokemons(index + counter)
        } else {
          console.log(`pokemons final ${index}`, pokemons);
          console.log(`pokemons final ${index}`, pokemons.length);
          return pokemons
        }
  
  
      })
      .catch(e => {
        console.error('err ', e)
      })
  }
  
  return getPokemons()

}

module.exports = {
  returnPokemons
}