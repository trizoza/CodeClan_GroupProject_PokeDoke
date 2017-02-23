var express = require('express');
var app = express();



app.listen(3000, function(){
  console.log('App running on port ' + this.address)
})
