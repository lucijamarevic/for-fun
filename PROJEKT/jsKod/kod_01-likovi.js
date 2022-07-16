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
            "hang-left": [1],
            "right": [1],
            "walk-right": [1],
            "hang-right": [1],
            "up": [1],
            "walk-up": [1]
        };

        this.layer = layer;
        this.visible = true;
        this.hanging = false;
        this.climbing = false;
    } 

    updatePosition() {
        if (this.climbing || this.hanging){
            super.updatePosition(0,0.8);
        }
        else {
            super.updatePosition(2,0.8);
        }
    }

    updateAnimation() {

        if (this.direction == 0) {
          if (this.velocity_y < -0.1 && this.climbing) this.changeFrameSet(this.frameSets("walk-up"), "loop", 5);
          else this.changeFrameSet(this.frameSets("up"), "pause");
        }
        else if (this.direction == 90) {
          if (this.velocity_x > 0.1) {
            if (this.hanging) this.changeFrameSet(this.frameSets("hang-right"), "loop", 5);
            else this.changeFrameSet(this.frameSets("walk-right"), "loop", 5);
          }
          else this.changeFrameSet(this.frameSets("right"), "pause");
        }
        else if (this.direction == 180) {
          if (this.velocity_y > 0.1 && this.climbing) this.changeFrameSet(this.frameSets("walk-down"), "loop", 5);
          else this.changeFrameSet(this.frameSets("down"), "pause");
        }
        else if (this.direction == 270) {
          if (this.velocity_x < -0.1) {
            if (this.hanging) this.changeFrameSet(this.frameSets("hang-left"), "loop", 5);
            else this.changeFrameSet(this.frameSets("walk-left"), "loop", 5);
          }
          else this.changeFrameSet(this.frameSets("left"), "pause");
        }
    
        this.animate();
      }
}


class Hero extends Character {
    constructor(x, y, layer) {
        super(x, y, layer);
    
        this.frame_sets = {
            "up": [61],
            "walk-up": [61, 62, 63, 64],
            "right": [31],
            "walk-right": [31, 32, 33, 34],
            "hang-right": [35, 36, 37, 38],
            "down": [61],
            "walk-down": [61, 62, 63, 64],
            "left": [1],
            "walk-left": [1, 2, 3, 4],
            "hang-left": [5, 6, 7, 8]
        };

        this._lives = 5;
        this._points = 0;
        this.alive = true;
    }

    get lives() {
        return this._lives;
    }

    set lives(v) {
        if (v < 1) {
            this.alive = false;
            this._lives = 1;
        }
        else {
            this._lives = v;
        }
    }

    get points() {
        return this._points;
    }

    set points(v) {
        if (v < 0) {
            this._points = 0;
        }
        else {
            this._points = v;
        }
    }

    moveRight() {
        this.direction = 90;
        this.velocity_x += 0.7;
      }
    
      moveLeft() {
        this.direction = 270;
        this.velocity_x -= 0.7;
      }
    
      moveUp() {
        this.direction = 0;
        this.velocity_y -= 0.7;
      }
    
      moveDown() {
        this.direction = 180;
        this.velocity_y += 0.7;
      }

    collect(g) {
        this.points += g.value;
        this.lives += g.life;
        g.visible = false;

        GameSettings.output("Bodovi: " + this.points);
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
            "hang-right": [53, 54, 55, 56],
            "down": [87],
            "walk-down": [87, 88, 89, 90],
            "left": [27],
            "walk-left": [27, 28, 29, 30],
            "hang-left": [23, 24, 25, 26]
        };
    }
}

class Other extends Item {
    constructor(layer) {
        super(layer);
        this.visible = true;
        this.layer = layer;

        // dodano naknadno
        if (this.constructor == Other) {
          throw new Error("Other se ne moze instancirati")
        }
        ///
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
      this.value = 0;
      this.life = 0;
  
      if (this.constructor == Collectable) {
        throw new Error("Collectable se ne moze instancirati")
      }
    }
  }
  
class Gold extends Collectable {
    constructor(layer) {
      super(layer);
      this.visible = true;
      this.value = 10;
    }
  }
  class Hearth extends Collectable {
    constructor(layer) {
      super(layer);
      this.visible = false;
      this.life = 1;
    }
  }