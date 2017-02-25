//// HANDLE MOVEMENT ON MAP ////////////


//// need to require player for coordinates ////////
var Map = function() {
  var canvas = document.querySelector("#map");
  var context = canvas.getContext('2d');
  var x = 300;
  var y = 200;
  var increment = 20;

  var ash = document.createElement('img');
  ash.src = "/img/ash.png";
  var ashWidth = 40;
  var ashHeight = ashWidth;
  var house = document.createElement('img');
  house.src = "/img/house.png";
  var gym = document.createElement('img');
  gym.src = "/img/gym.png";
  var grass = document.createElement('img');
  grass.src = "/img/grass.png";
  var pavement = document.createElement('img');
  pavement.src = "/img/pavement.jpeg";

  loadCanvas = function() {
    
    pavement.onload = function() {
      context.drawImage(this, 0, 0, 600, 400);

      ash.onload = function() {
        context.drawImage(this, x - ashWidth/2, y - ashWidth/2, ashWidth, ashHeight);
      };

      house.onload = function() {
        context.drawImage(this, 40, 240, 120, 120);
      };

      gym.onload = function() {
        context.drawImage(this, 40, 0, 220, 160);
        context.drawImage(this, 340, 0, 220, 160);
      };
      
      grass.onload = function() {
        context.drawImage(this, 240, 220, 160, 260);
        context.drawImage(this, 360, 220, 160, 260);
        context.drawImage(this, 490, 220, 160, 260);
      };

      drawMap();
      context.drawImage(ash, x - ashWidth/2, y - ashWidth/2, ashWidth, ashHeight);
    };

  };

////// after the images are loaded for use, draw them in proper order
  drawMap = function() {
    context.drawImage(pavement, 0, 0, 600, 400);
    context.drawImage(house, 40, 240, 120, 120);
    context.drawImage(gym, 40, 0, 220, 160);
    context.drawImage(gym, 340, 0, 220, 160);
    context.drawImage(grass, 240, 220, 160, 260);
    context.drawImage(grass, 360, 220, 160, 260);
    context.drawImage(grass, 490, 220, 160, 260);
  };


  var moveAsh = function(xInc, yInc) {
    drawMap();
    context.drawImage(ash, x - ashWidth/2 + xInc, y - ashWidth/2 + yInc, ashWidth, ashHeight);
    x += xInc;
    y += yInc;
    console.log(x,y);
  };

  document.onkeydown = function(event) {
    console.log(event.keyCode);

    if (event.keyCode === 39) {
      // right
      if (x >= 600 - increment) {
        moveAsh(0, 0);
      }
      else if (x === 20 && 240 <= y && y <= 360) {
        moveAsh(0, 0);
      }
      else if (x === 20 && 20 <= y && y <= 160) {
        moveAsh(0, 0);
      }
      else if (x === 320 && 20 <= y && y <= 160) {
        moveAsh(0, 0);
      }
      else{
        moveAsh(increment, 0);
      }
    }

    if (event.keyCode === 37) {
      // left
      if (x <= 0 + increment) {
        moveAsh(0, 0);
      }
      else if (x === 180 && 240 <= y && y <= 360) {
        moveAsh(0, 0);
      }
      else if (x === 280 && 20 <= y && y <= 160) {
        moveAsh(0, 0);
      }
      else if (x === 580 && 20 <= y && y <= 160) {
        moveAsh(0, 0);
      }
      else{
        moveAsh(-increment, 0);
      }
    }

    if (event.keyCode === 38) {
      // up
      if (y <= 0 + increment) {
        moveAsh(0, 0);
      }
      else if (y === 380 && 40 <= x && x <= 160) {
        moveAsh(0, 0);
      }
      else if (y === 180 && 40 <= x && x <= 260) {
        moveAsh(0, 0);
      }
      else if (y === 180 && 340 <= x && x <= 560) {
        moveAsh(0, 0);
      }
  

      else {
        moveAsh(0, -increment);
      }
    }

    if (event.keyCode === 40) {
      // down
      if (y >= 400 - increment) {
        moveAsh(0, 0);
      }
      else if (y === 220 && 40 <= x && x <= 160) {
        moveAsh(0, 0);
      }
      else {
        moveAsh(0, increment);
      }
    }
  };

  loadCanvas();

};

module.exports = Map;