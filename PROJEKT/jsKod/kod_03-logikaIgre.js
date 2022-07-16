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

  if (GAME.activeWorldMap.name = "level1")
    projekt();

  GAME.update();

}

function isTouching(sprite,list){
  let j = 0;
  for(i = 0; i < list.length;i++){
    if (sprite.touching(list[i])){
      j++;
    }
  }
  if (j >= 1) {
    return true;
  }
  else {
    return false;
  }
}

function projekt() {

  if (SENSING.right.active) {
    Postavke.hero.moveRight();
  }

  if (SENSING.left.active) {
    Postavke.hero.moveLeft();
  }

  if (SENSING.up.active) {
    if (Postavke.hero.climbing || Postavke.hero.hanging) {
      Postavke.hero.moveUp();
    }
    else {};
  }
  if (SENSING.down.active) {
    if (Postavke.hero.climbing || Postavke.hero.hanging) {
      Postavke.hero.moveDown();
    }
    else {};
  }

    /** ZAŠTITARI */
  for (let i = 0; i < Postavke.guards.length; i++) {
    g = Postavke.guards[i];

      /** GIBANJE ZAŠTITARA */  /** kao ok je, al ima mana jer su skale i šipke široke, očito prilikom igranja, popravit u tiled-u */
    if (g.y > Postavke.hero.y) {   // zaminjeno s onin za livo - desno naknadno
      if (g.climbing || g.hanging) g.moveUp();
    }
    else {
      if (g.climbing || g.hanging) g.moveDown();
    }
    if (g.x < Postavke.hero.x) {
      g.moveRight();
    }
    else {
      g.moveLeft();
    }

      /** DIRA LI GUARD ŠIPKE */
    g.hanging = false;
    guard_hanging = isTouching(g,Postavke.bars);
    if (guard_hanging) {
      g.hanging = true;   // promijenjeno naknadno
    }

      /** DIRA LI GUARD SKALE */
    g.climbing = false;
    guard_climbing = isTouching(g,Postavke.ladders);
    if (guard_climbing) {
      g.climbing = true;   // promijenjeno naknadno
    }
  }

    /** DIRA LI HERO ZLATO */
  for (let i = 0; i < Postavke.gold.length; i++) {
    if (Postavke.hero.touching(Postavke.gold[i])) {
      Postavke.hero.collect(Postavke.gold[i]);    // odi je neka greska, nekad krivo zbroji bodove
    }
  }

    /** DIRA LI HERO ŠIPKE */
  Postavke.hero.hanging = false;
  hanging = isTouching(Postavke.hero,Postavke.bars);
  if (hanging) {
    Postavke.hero.hanging = true;
  }

    /** DIRA LI HERO SKALE */
  Postavke.hero.climbing = false;
  climbing = isTouching(Postavke.hero,Postavke.ladders);
  if (climbing) {
    Postavke.hero.climbing = true;
  }

  let a = Postavke.hero.points;
  climbing_final = isTouching(Postavke.hero,Postavke.final_ladders);
  if (climbing_final && a==40) {    
    Postavke.hero.climbing = true;
  }

  Postavke.hero.alive = true;
  life = isTouching(Postavke.hero,Postavke.guards);
  if (life) {
    Postavke.hero.lives -= 1;
    let zivoti = Postavke.hero.lives;
    // dodano naknadno
    GameSettings.output("Zivoti: " + Postavke.hero.lives);
    if (Postavke.hero.lives < 1) Postavke.hero.alive = false; // mrtav je ako nema vise zivota
    GameSettings.output("Alive = " + Postavke.hero.alive);
    if (Postavke.hero.alive) { // ako je ziv ima novi pokusaj ne levelu 
    ///
      setupLevel1();
      Postavke.hero.lives = zivoti;
    }
  }

  // dodano naknadno
  if (Postavke.hero.alive == false) {
    btnGame.dispatchEvent(gameoverEvent);
  }
  ///

  if (Postavke.hero.touching(Postavke.final_ladders[Postavke.final_ladders.length-1])) {
    btnGame.dispatchEvent(winEvent);
  }
}