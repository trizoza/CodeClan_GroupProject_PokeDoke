use pokedoke_db;

db.original151Pokemons.drop();

db.original151Pokemons.insert([
  {name: "bulbasaur"}, 
  {name: "charmander"}, 
  {name: "squirtle"}
]);

db.original151Pokemons.find();