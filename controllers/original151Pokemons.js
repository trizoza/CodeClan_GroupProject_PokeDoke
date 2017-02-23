var express = require('express');
var originalRouter = express.Router();

originalRouter.get('/',function(req, res) {
  console.log("success");
});

module.exports = originalRouter;