var express = require('express');
var router = express.Router();
var path = require('path')
var PokemonQuery = require('./db/PokemonQuery');
var query = new PokemonQuery();

router.use('/sourcePokemons', require('./sourcePokemons'));

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
 
  query.all(function(docs) {
    res.json(docs);

});

module.exports = router;