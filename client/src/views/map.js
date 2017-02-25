//// HANDLE MOVEMENT ON MAP ////////////

//// need to require player for coordinates ////////
var Map = function() {
  var canvas = document.querySelector("#map");
  var context = canvas.getContext('2d');
  var x = 300;
  var y = 200;
  var increment = 10;

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
  pavement.src = "/img/pavement.png";
  var upButton = document.querySelector('#up-button');
  var downButton = document.querySelector('#down-button');
  var leftButton = document.querySelector('#left-button');
  var rightButton = document.querySelector('#right-button');
  var aButton = document.querySelector('#a-button');


  loadCanvas = function() {
    
    pavement.onload = function() {
      context.drawImage(this, 0, 0, 580, 460);
      ash.onload = function() {
        context.drawImage(this, x - 20, y - 20, ashWidth, ashHeight);
      };
      house.onload = function() {
        context.drawImage(this, 0, 270, 150, 130);
      };
      gym.onload = function() {
        context.drawImage(this, 0, 0, 220, 170);
        context.drawImage(this, 320, 0, 220, 170);
      };
      grass.onload = function() {
        context.drawImage(this, 540, 400, 40, 60);
      };
      drawMap();
      context.drawImage(ash, x - 20, y - 20, ashWidth, ashHeight);
    }; 
    
  };

  drawMap = function() {
    context.drawImage(pavement, 0, 0, 580, 460);
    context.drawImage(house, 0, 270, 150, 130);
    context.drawImage(gym, 0, 0, 220, 170);
    context.drawImage(gym, 360, 0, 220, 170);
    context.drawImage(grass, 540, 400, 40, 60);
    context.drawImage(grass, 500, 400, 40, 60);
    context.drawImage(grass, 460, 400, 40, 60);
    context.drawImage(grass, 420, 400, 40, 60);
    context.drawImage(grass, 380, 400, 40, 60);
    context.drawImage(grass, 340, 400, 40, 60);
    context.drawImage(grass, 300, 400, 40, 60);
    context.drawImage(grass, 260, 400, 40, 60);
    context.drawImage(grass, 540, 340, 40, 60);
    context.drawImage(grass, 500, 340, 40, 60);
    context.drawImage(grass, 460, 340, 40, 60);
    context.drawImage(grass, 420, 340, 40, 60);
    context.drawImage(grass, 380, 340, 40, 60);
    context.drawImage(grass, 340, 340, 40, 60);
    context.drawImage(grass, 300, 340, 40, 60);
    context.drawImage(grass, 260, 340, 40, 60);
    context.drawImage(grass, 540, 280, 40, 60);
    context.drawImage(grass, 500, 280, 40, 60);
    context.drawImage(grass, 460, 280, 40, 60);
    context.drawImage(grass, 420, 280, 40, 60);
    context.drawImage(grass, 380, 280, 40, 60);
    context.drawImage(grass, 340, 280, 40, 60);
    context.drawImage(grass, 300, 280, 40, 60);
    context.drawImage(grass, 260, 280, 40, 60);
  };

  var moveAsh = function(xInc, yInc) {
    drawMap();
    context.drawImage(ash, x - 20 + xInc, y - 20 + yInc, ashWidth, ashHeight);
    x += xInc;
    y += yInc;
    console.log(x,y);
  };

  document.onkeydown = function(event) {
    console.log(event.keyCode);
    console.log(upButton.onclick);
    if (event.keyCode === 39) {
      // right
      if (x >= 560) {
        moveAsh(0, 0);
      }
      else if (x === 340 && 20 <= y && y <= 180) {
        moveAsh(0, 0);
      }
      else{
        moveAsh(increment, 0);
      }
    }

    if (event.keyCode === 37) {
      // left
      if (x <= 20) {
        moveAsh(0, 0);
      }
      else if (x === 240 && 20 <= y && y <= 180) {
        moveAsh(0, 0);
      }
      else if (x === 170 && 260 <= y && y <= 410) {
        moveAsh(0, 0);
      }
      else{
        moveAsh(-increment, 0);
      }
    }

    if (event.keyCode === 38) {
      // up
      if (y <= 20) {
        moveAsh(0, 0);
      }
      else if (y === 420 && 20 <= x && x <= 160) {
        moveAsh(0, 0);
      }
      else if (y === 190 && 20 <= x && x <= 230) {
        moveAsh(0, 0);
      }
      else if (y === 190 && 350 <= x && x <= 560) {
        moveAsh(0, 0);
      }
      else {
        moveAsh(0, -increment);
      }
    }

    if (event.keyCode === 40) {
      // down
      if (y >= 440) {
        moveAsh(0, 0);
      }
      else if (y === 250 && 20 <= x && x <= 160) {
        moveAsh(0, 0);
      }
      else {
        moveAsh(0, increment);
      }
    }
  };

  upButton.onclick = function(){
   if (y <= 20) {
     moveAsh(0, 0);
   }
   else if (y === 420 && 20 <= x && x <= 160) {
     moveAsh(0, 0);
   }
   else if (y === 190 && 20 <= x && x <= 230) {
     moveAsh(0, 0);
   }
   else if (y === 190 && 350 <= x && x <= 560) {
     moveAsh(0, 0);
   }
   else {
     moveAsh(0, -increment);
   }
 }

 downButton.onclick = function(){
   if (y >= 440) {
     moveAsh(0, 0);
   }
   else if (y === 250 && 20 <= x && x <= 160) {
     moveAsh(0, 0);
   }
   else {
     moveAsh(0, increment);
   }
 }
 leftButton.onclick = function(){
   if (x <= 20) {
     moveAsh(0, 0);
   }
   else if (x === 240 && 20 <= y && y <= 180) {
     moveAsh(0, 0);
   }
   else if (x === 170 && 260 <= y && y <= 410) {
     moveAsh(0, 0);
   }
   else{
     moveAsh(-increment, 0);
   }
 }
 rightButton.onclick = function(){
   if (x >= 560) {
     moveAsh(0, 0);
   }
   else if (x === 340 && 20 <= y && y <= 180) {
     moveAsh(0, 0);
   }
   else{
     moveAsh(increment, 0);
   }
 }
 
 aButton.onclick = function(){
  console.log('aButton has been clicked');
} 

loadCanvas();

};

module.exports = Map;