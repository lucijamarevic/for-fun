class Postavke {

  constructor() {
    if (this instanceof Postavke) {
      throw new Error("Statička klasa nema instance!");
    }
  } 
 
  /** @type {Hero} */
  static hero = null; 

  /** @type {Guard} */
  static guards = [];

  static ladders = [];
  static final_ladders = [];
  static bars = [];

  /** @type {Gold} */
  static gold = [];
  static hearth = []; // dodano naknadno

  static random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}