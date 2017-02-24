//// HANDLE MOVEMENT ON MAP ////////////
var UI = function() {

  var canvas = document.querySelector("#map");
  var context = canvas.getContext('2d');
  var ash = document.createElement('img');
  ash.src = "/img/ash.png";


  var drawAsh = function(image) {

    if (!image) image = this;
    

    context.drawImage(ash, 150, 150, 40, 40);

    console.log('draw ash', ash.src);
  };

  if (ash.complete) {
    drawAsh(ash);
  }
  else {
    ash.onload = drawAsh;
  }

};

module.exports = UI;