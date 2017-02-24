var express = require('express');
var sourceRouter = express.Router();

var PokemonQuery = require('./db/PokemonQuery');
var query = new PokemonQuery();

sourceRouter.get('/',function(req, res) {
  query.all(function(docs) {
    res.json(docs);
  });
});

sourceRouter.get('/',function(req, res) {
  console.log("success");
});

module.exports = sourceRouter;