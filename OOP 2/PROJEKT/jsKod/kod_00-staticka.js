class Postavke {

  constructor() {
    if (this instanceof Postavke) {
      throw new Error("Statička klasa nema instance!");
    }
  } 

  /** @type {Racoon} */
  static racoon = null;

  /** @type {Hero} */
  static hero = null; 

  /** @type {Guard} */
  static guards = [];

  static ladders = [];
  static bars = [];

  /** @type {Gold} */
  static gold = [];

  static random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}