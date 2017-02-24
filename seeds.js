use pokedoke_db;

db.sourcePokemons.drop();

db.sourcePokemons.insert([
  {name: "bulbasaur"}, 
  {name: "charmander"}, 
  {name: "squirtle"}
]);

db.sourcePokemons.find();