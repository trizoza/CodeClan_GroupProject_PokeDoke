var express = require('express');
var originalRouter = express.Router();

var PokemonQuery = require('./db/PokemonQuery');
var query = new PokemonQuery();

originalRouter.get('/',function(req, res) {
  query.all(function(docs) {
    res.json(docs);
  });
});

originalRouter.get('/',function(req, res) {
  console.log("success");
});

module.exports = originalRouter;