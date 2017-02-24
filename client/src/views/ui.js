//// HANDLE MOVEMENT ON MAP ////////////


//// need to require player for coordinates ////////
var UI = function() {

  var canvas = document.querySelector("#map");
  var context = canvas.getContext('2d');
  var ash = document.createElement('img');
  ash.src = "/img/ash.png";
  var ashWidth = 40;
  var ashHeight = ashWidth;
  var x = 150;
  var y = 150;
  var increment = 20;


  var drawAsh = function(image) {
    if (!image) image = this;
    context.drawImage(ash, x - 20, y - 20, ashWidth, ashHeight);
    console.log('draw ash', ash.src);
  };

  var moveAsh = function(image, xInc, yInc) {
    if (!image) image = this;
    context.drawImage(ash, x - 20 + xInc, y - 20 + yInc, ashWidth, ashHeight);
    console.log('draw ash', ash.src);
  };

  if (ash.complete) {
    drawAsh(ash);
  }
  else {
    ash.onload = drawAsh;
  }

  document.onkeydown = function(event) {
    console.log(event.keyCode);

    if (event.keyCode === 39) {
      // right
      if (ash.complete) {
        moveAsh(ash, increment, 0);
      }
      else {
        ash.onload = moveAsh;
      }
      x += increment;
    }

    if (event.keyCode === 37) {
      // left
    }

    if (event.keyCode === 38) {
      // up
    }

    if (event.keyCode === 40) {
      // down
    }
  };

};

module.exports = UI;