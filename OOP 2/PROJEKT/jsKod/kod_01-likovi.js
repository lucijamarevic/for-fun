//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion 

// ovdje pišete svoje klase


class Character extends Sprite {
    constructor(x, y, layer) {
        super(x, y, 30, 30);
        this.frame_sets = {
            "down": [1], 
            "walk-down": [1],
            "left": [1],
            "walk-left": [1],
            "right": [1],
            "walk-right": [1],
            "up": [1],
            "walk-up": [1]
        };

        this.layer = layer;
        this.visible = true;
    }
}


class Hero extends Character {
    constructor(x, y, layer) {
        super(x, y, layer);

        this.hanging = false;
        this.climbing = false;

        if (this.hanging) {
            this.frame_sets = {
                "up": [61],
                "walk-up": [61, 62, 63, 64],
                "right": [31],
                "walk-right": [35, 36, 37, 38],
                "down": [61],
                "walk-down": [61, 62, 63, 64],
                "left": [1],
                "walk-left": [5, 6, 7, 8]
            };
        }
        else {
            this.frame_sets = {
                "up": [61],
                "walk-up": [61, 62, 63, 64],
                "right": [31],
                "walk-right": [31, 32, 33, 34],
                "down": [61],
                "walk-down": [61, 62, 63, 64],
                "left": [1],
                "walk-left": [1, 2, 3, 4]
            };
        }

        this.lives = 5;
        this.points = 0;
        this.men = 0;
    }

    collect(g) {
        this.points += g.value;
        g.visible = false;

        GameSettings.output("Bodovi: " + this.points);
    }

    updatePosition() {
        if (this.climbing) {
            super.updatePosition(0,0.8);
        }
        else {
            super.updatePosition();
        }
    }
}

class Guard extends Character {
    constructor(x, y, layer) {
        super(x, y, layer);
        this.frame_sets = {
            "up": [87],
            "walk-up": [87, 88, 89, 90],
            "right": [57],
            "walk-right": [57, 58, 59, 60],
            "down": [87],
            "walk-down": [87, 88, 89, 90],
            "left": [27],
            "walk-left": [27, 28, 29, 30]
        };
    }
}

class Other extends Item {
    constructor(layer) {
        super(layer);
        this.visible = true;
        this.layer = layer;
    }

    updatePosition() {}
}

class Ladders extends Other {
    constructor(layer) {
        super(layer);
        this.layer = layer;
    }
}

class Bars extends Other {
    constructor(layer) {
        super(layer);
        this.layer = layer;
    }
}

class Collectable extends Item {
    constructor(layer) {
      super(layer);
  
      if (this.constructor == Collectable) {   // ovaj dio ju cini apstraktnom
        throw new Error("Collectable se ne moze instancirati")
      }
    }
  }
  
class Gold extends Collectable {
    constructor(layer) {
      super(layer)
      this.visible = true;
      this.value = 10;
    }
  }



    // nista ovo, cisto primjer
class Racoon extends Sprite {
    constructor(x, y, layer) {
        super(x, y, 60, 60);
        this.frame_sets = {
            "up": [1],
            "walk-up": [1],
            "right": [1],
            "walk-right": [2, 3, 4, 5, 6, 7, 8],
            "down": [1],
            "walk-down": [1],
            "left": [11],
            "walk-left": [12, 13, 14, 15, 16, 17, 18]
        };

        this.layer = layer;
        this.visible = true; //tek kad se postavi layer

    }
}