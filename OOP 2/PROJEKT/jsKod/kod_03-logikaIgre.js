//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion

/// <reference path="kod_01-likovi.js"/>
/// <reference path="kod_02-postavke.js"/>

/**
 * Promjena stanja likova - interakcije
 */
function update_main() {

  if (GAME.activeWorldMap.name == "v10")
    vjezbe10();

  else if (GAME.activeWorldMap.name = "level1")
    projekt();

  GAME.update();

}

function projekt() {
  if (SENSING.right.active) {
    Postavke.hero.moveRight();
  }

  if (SENSING.left.active) {
    Postavke.hero.moveLeft();
  }

  for (let i = 0; i < Postavke.guards.length; i++) {
    g = Postavke.guards[i];
    if (g.x < Postavke.hero.x) {
      g.moveRight();
    }
    else {
      g.moveLeft();
    }

    /*if (Postavke.hero.touching(g)) {    // RADI
      Postavke.hero.lives -= 1;     
      let a = Postavke.hero.lives;  
      GameSettings.output("Zivoti: " + Postavke.hero.lives);
      setupLevel1();
      Postavke.hero.lives = a;      // triba zaustavit igru kad zivoti padnu na 0
    }*/ 
  }

  for (let i = 0; i < Postavke.gold.length; i++) {
    if (Postavke.hero.touching(Postavke.gold[i])) {
      Postavke.hero.collect(Postavke.gold[i]);
    }
  }

  if (Postavke.hero.touching(Postavke.bars[0])){
    if (SENSING.left.active) {
      Postavke.hero.moveLeft;
    }
    else {
      Postavke.hero.moveRight;
    }
  }

  for (let i = 0; i < Postavke.ladders.length; i++) {
    if (Postavke.hero.touching(Postavke.ladders[i])) {
      if (SENSING.up.active) {
        Postavke.hero.moveUp;
      }
      if (SENSING.down.active) {
        Postavke.hero.moveDown;
      }
    }
  }
}

function vjezbe10() {
  if (SENSING.right.active) {
    Postavke.racoon.moveRight();
  }

}
