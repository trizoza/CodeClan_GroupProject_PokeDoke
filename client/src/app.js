var UI = require('./views/ui');
var Map = require('./views/map');

var app = function() {
  // new UI();
  new Map();
};

window.onload = app;