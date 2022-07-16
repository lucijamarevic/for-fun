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

const btnGame = document.getElementById("btnGame");
//const gameoverEvent = new Event("gameover");

const gameoverEvent = new CustomEvent("gameover", {
  detail: {
    win: false
  }
});

const winEvent = new CustomEvent("gameover", {
  detail: {
    win: true
  }
});
//const levelupEvent = new Event("levelup");

function kraj(ev) {
  //console.log(ev);  
  btnStop_click();
  if (ev.detail.win) {
    console.log("Pobjeda");
  }
  else {
    console.log("Izgubili ste!");
  }
}

btnGame.addEventListener("gameover", kraj);
//btnGame.addEventListener("levelup", setupLevel2); 

// što će se pokrenuti kad se klikne button Setup:
let btnSetupGame = document.getElementById("btnSetupGame");
btnSetupGame.addEventListener("click", setup);


function setup() {

  GAME.clearSprites(); 

  let odabrana = GAME.activeWorldMap.name;
  GameSettings.output(odabrana);

  switch (odabrana) {
    case "level1":
      setupLevel1();
      break;

    default:
      throw "Ne postoji setup za " + GAME.activeWorldMap.name;
      break;
  }

  render_main();
}
 
/* LEVELS */

function setupLevel1() {

  GAME.clearSprites();

  GAME.activeWorldMap.setCollisions("platforms");

    /** SKALE */
  for (let i = 0; i < 37; i++) {
    let layer = GAME.getSpriteLayer("s" + (i+1)); 
    l = new Ladders(layer);
    if (i>32) {
      Postavke.final_ladders.push(l);
    }
    else {
      Postavke.ladders.push(l);
    }
    GAME.addSprite(l);
  }

    /** ŠIPKE */
  for (let j = 0; j < 2; j++) {
    let layer = GAME.getSpriteLayer("b" + (j+1));
    b = new Bars(layer);
    Postavke.bars.push(b);
    GAME.addSprite(b);
  }

    /** ZLATO */
  for (let l = 0; l < 4; l++) {
    let layer = GAME.getSpriteLayer("g" + (l+1));
    let g = new Gold(layer);
    Postavke.gold.push(g);
    GAME.addSprite(g);
  }

    /** HEROJ */
  let h = new Hero(0, 0, GAME.getSpriteLayer("hero"));
  GAME.addSprite(h);

  Postavke.hero = h;

    /** ZAŠTITARI */
  guards_x = [20*32, 4*32, 15*32];
  guards_y = [6*32, 10*32, 17*32];
  for (let k = 0; k < guards_x.length; k++) {
    let g = new Guard(guards_x[k], guards_y[k], GAME.getSpriteLayer("guard"));
    GAME.addSprite(g);
    Postavke.guards.push(g);
  }
}