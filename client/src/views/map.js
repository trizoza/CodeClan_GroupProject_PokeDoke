//// HANDLE MOVEMENT ON MAP ////////////
var Game = require('./game');

//// need to require player for coordinates ////////
var Map = function(pokemonData, Player, Pokemon) {

  var game = new Game(pokemonData, Player, Pokemon, aButton);
  var welcomeScreen = document.querySelector('#welcomeScreen');
  var chooseScreen = document.querySelector('#choose_screen');
  var fightScreen = document.querySelector('#fight_screen');
  var homeScreen = document.querySelector('#home_screen');
  var mapCanvas = document.querySelector("#map");

  var context = mapCanvas.getContext('2d');
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
  var nameSubmitButton = document.querySelector('#submit_name');

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
    checkIfInGrass();
  };

  document.onkeydown = function(event) {
    console.log(event.keyCode);
    if (mapCanvas.style.zIndex == 100) {

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

      //////////// ENTER HOME ////////////////////////////////////////////////////////////////////////
      if (event.keyCode === 72) {
        // h
        if (x === 50 && y === 420) {
          toggleViews(mapCanvas, homeScreen);
          atHome();
        }

      }


    }
    
  };





  ///////////// GRASS FIGHT ON /////////////////////////////////////////////////////////////////
  var checkIfInGrass = function() {
    
    if (x >= 260 && y >= 280) {

      var randNum = Math.ceil(Math.random()*(10 - 0));      

      if (randNum === 10) {
        console.log('you are being attacked');
        

        if (game.player.pokemonOnHand.length >= 1 && game.grassOpponant.pokemonOnHand.length >= 1) {

          toggleViews(mapCanvas, fightScreen);
          fightScreen.innerHTML = "<p id='player_name'>"+game.player.name+"</p><p id='player_pok_name'>"+game.player.pokemonOnHand[0].name+"</p><p id='player_pok_hp'>"+game.player.pokemonOnHand[0].fightHp+"</p><p id='opponant_pok_name'>"+game.grassOpponant.pokemonOnHand[0].name+"</p><p id='opponant_pok_hp'>"+game.grassOpponant.pokemonOnHand[0].fightHp+"</p>";

        }

        aButton.onclick = function(){

          if (fightScreen.style.zIndex == 100) {

          if (game.player.pokemonOnHand.length >= 1 && game.grassOpponant.pokemonOnHand.length >= 1) {

            game.fight(game.player, game.grassOpponant, game.calcDamage);
            
            fightScreen.innerHTML = "<p id='player_name'>"+game.player.name+"</p><p id='player_pok_name'>"+game.player.pokemonOnHand[0].name+"</p><p id='player_pok_hp'>"+game.player.pokemonOnHand[0].fightHp+"</p><p id='opponant_pok_name'>"+game.grassOpponant.pokemonOnHand[0].name+"</p><p id='opponant_pok_hp'>"+game.grassOpponant.pokemonOnHand[0].fightHp+"</p>";

            game.checkForFainted(game.player);
            game.checkForFainted(game.grassOpponant);

            console.log('aButton has been clicked');
          }
          else {
            game.getFaintedPokemon(game.player, game.grassOpponant);
            console.log('player', game.player)
            toggleViews(fightScreen, mapCanvas);
            game.populateOpponant(game.grassOpponant, 1);

          }
        }
      }
    }
  }
}
///////////// GRASS FIGHT OVER /////////////////////////////////////////////////////////////////



//////////// AT HOME ////////////////////////////////////////////////////////////////////////

var atHome = function() {
  ////////////// REVIVE FAINTED POKEMONS //////////////////////////////////////////////////////
  game.revivePokemons(game.player);
  
  //////////////// SETUP HTML //////////////////////////////////////////////////////////////////
  homeScreen.innerHTML = "";
  var welcomeAtHome = document.createElement('p');
  welcomeAtHome.innerText = "Welcome home " + game.player.name + "! Here you can take a rest and let your Pokémon rest too. Once you leave home, your Pokémon will be again strong and healthy. Press A to hit the world!";
  homeScreen.appendChild(welcomeAtHome);


  //////////////////////// POKEDEX SELECTION ///////////////////////////////////////////////////
  var selectionContainer = document.createElement('div');
  homeScreen.appendChild(selectionContainer);
  var pokedexSelection = document.createElement('select');
  if (game.player.pokedex.length >=1) {
    selectionContainer.innerHTML = "";
    var selectionAdvice = document.createElement('p');
    selectionAdvice.innerText = "Choose a Pokémon from Pokedex";
    selectionContainer.appendChild(selectionAdvice);
    selectionContainer.appendChild(pokedexSelection);
    var predefinedPokeOption = document.createElement('option');
    predefinedPokeOption.innerText = "...";
    pokedexSelection.innerHTML = "";
    pokedexSelection.appendChild(predefinedPokeOption);
    for(var each of game.player.pokedex) {
      var pokeOption = document.createElement('option');
      pokeOption.innerText = each.name;
      pokedexSelection.appendChild(pokeOption);
    }
  }
  else {
    selectionContainer.innerHTML = "";
    var selectionAdvice = document.createElement('p');
    selectionAdvice.innerText = "Pokedex empty";
    selectionContainer.appendChild(selectionAdvice);
  }

  var pokemonDetails = document.createElement('div');
  homeScreen.appendChild(pokemonDetails);

  var handleSelectChange = function(event) {
    pokemonDetails.innerHTML="";
    var p = document.createElement('p');
    var img = document.createElement('img');
    var nameOfSelectedPokemon = "";
    for(var each of game.player.pokedex) {
      if (each.name === this.value) {
        p.innerText += "Name: " + each.name;
        nameOfSelectedPokemon = each.name;
        p.innerText += "\nHP: " + each.hp;
        p.innerText += "\nAttack: " + each.attack;
        p.innerText += "\nDefense: " + each.defense;
        img.src = each.front_picture;
      }
    }
    pokemonDetails.appendChild(img);
    pokemonDetails.appendChild(p);
    var addToHandButton = document.createElement('button');
    pokemonDetails.appendChild(addToHandButton);

    var handleButtonClick = function(){
      for(var i = 0; i < game.player.pokedex.length; i++) {
        if (game.player.pokedex[i].name === nameOfSelectedPokemon) {
          if (game.player.pokemonOnHand.length < 6) {
            game.player.pokemonOnHand.push(game.player.pokedex[i]);
            game.player.pokedex.splice(i, 1);
            pokemonDetails.innerHTML="";
          }
        }
      }
      if (game.player.pokedex.length >=1) {
        selectionContainer.innerHTML = "";
        var selectionAdvice = document.createElement('p');
        selectionAdvice.innerText = "Choose a Pokémon from Pokedex";
        selectionContainer.appendChild(selectionAdvice);
        selectionContainer.appendChild(pokedexSelection);
        var predefinedPokeOption = document.createElement('option');
        predefinedPokeOption.innerText = "...";
        pokedexSelection.innerHTML = "";
        pokedexSelection.appendChild(predefinedPokeOption);
        for(var each of game.player.pokedex) {
          var pokeOption = document.createElement('option');
          pokeOption.innerText = each.name;
          pokedexSelection.appendChild(pokeOption);
        }
      }
      else {
        selectionContainer.innerHTML = "";
        var selectionAdvice = document.createElement('p');
        selectionAdvice.innerText = "Pokedex empty";
        selectionContainer.appendChild(selectionAdvice);
      }
    }


    addToHandButton.onclick = handleButtonClick;
    console.log('event', event);
  }

  pokedexSelection.onchange = handleSelectChange;
   







  ///////////////////////// LEAVE HOME ////////////////////////////////////
  aButton.onclick = function() {
    if (homeScreen.style.zIndex == 100) {
      toggleViews(homeScreen, mapCanvas);
      console.log('zIndex', mapCanvas.style.zIndex);
      console.log('aButton has been clicked in house');
    }
  }
};







//////////////// BUTTONS ///////////////////////////////////////////////////////////////////////
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

    ////////////// ENTER HOME ///////////////////
    if (mapCanvas.style.zIndex == 100) {
      if (x === 50 && y === 420) {
        toggleViews(mapCanvas, homeScreen);
        atHome();
        console.log('zIndex', mapCanvas.style.zIndex);
      }
    }
    
    //////// testing //////////
    // console.log('calc damge', game.calcDamage(game.unusedPokemon[2], game.unusedPokemon[77]));
    // game.playerPicksPokemon("pikachu");
    // console.log('player pick pokemon', game.player.pokemonOnHand);
    // game.populateOpponant(game.opponant, 3);
    // console.log('oponnant hand', game.opponant.pokemonOnHand);
    // console.log('oponnant poke name', game.opponant.pokemonOnHand[0].name);
    // console.log('left pokemon', game.unusedPokemon);
 
    console.log('aButton has been clicked on map canvas');
  }

  /////////// 01 WELCOME SCREEN ////////////////  
  nameSubmitButton.onclick = function() {
    var nameToAdd = document.querySelector('#name_to_add');
    game.player.setPlayersName(nameToAdd.value);
    //////

    game.populateOpponant(game.grassOpponant, 1);
    console.log('opponants pokemon', game.grassOpponant.pokemonOnHand[0]);

    toggleViews(welcomeScreen, chooseScreen);
    console.log('players name', game.player.name);

     /////////// 02 CHOOSE SCREEN ////////////////  
     var welcomeQuote = document.createElement('p');
     welcomeQuote.innerText = "Hey " + game.player.name + "! Choose your Pokémon!"
     chooseScreen.appendChild(welcomeQuote);

     var bulbasaurPic = document.createElement('img');
     bulbasaurPic.id = 'bulbasaur';
     bulbasaurPic.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';

     var charmanderPic = document.createElement('img');
     charmanderPic.id = 'charmander';
     charmanderPic.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png';

     var squirtlePic = document.createElement('img');
     squirtlePic.id = 'squirtle';
     squirtlePic.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png';

     chooseScreen.appendChild(bulbasaurPic);
     chooseScreen.appendChild(charmanderPic);
     chooseScreen.appendChild(squirtlePic);

     bulbasaurPic.onclick = function() {
       game.playerPicksPokemon("blastoise");
       console.log('sweet you have choosen bulbi! its gonna be muddy', game.player.pokemonOnHand[0]);
       toggleViews(chooseScreen, mapCanvas);
     }

     charmanderPic.onclick = function() {
       game.playerPicksPokemon("charmander");
       console.log('sweet you have choosen charmi! its gonna be hot', game.player.pokemonOnHand[0]);
       toggleViews(chooseScreen, mapCanvas);
     }

    squirtlePic.onclick = function() {
       game.playerPicksPokemon("squirtle");
       console.log('sweet you have choosen squirty! its gonna be wet', game.player.pokemonOnHand[0]);
       toggleViews(chooseScreen, mapCanvas);
     }

  }

  

  //////////////// BUTTONS ///////////////////////////////////////////////////////////////////////




  var toggleViews = function(recentView, nextView) {
    recentView.style.zIndex = 1;
    nextView.style.zIndex = 100;
  }

  loadCanvas();

};

module.exports = Map;