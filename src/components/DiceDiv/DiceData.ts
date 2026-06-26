/** Class representing a dice. */
export class Dice {
  /** Number of faces of the dice (Interval: [1, _faces]). */
  private _faces: number;

  /** Current face of the dice. */
  private _face: number = 1;

  constructor(faces: number) {
    this._faces = faces;
  }

  /**
   * Get the number of faces of the dice.
   * @return {number} Number of faces of the dice.
   */
  get faces(): number {
    return this._faces;
  }

  /**
   * Get the current face.
   * @return {number} Current face of the dice.
   */
  get face(): number {
    return this._face;
  }

  /**
   * Roll the dice.
   */
  roll(): void {
    this._face = Math.floor(Math.random() * (this._faces - 1) + 1);
  }
}

/*
let test: Dice = new Dice(6);
console.log(test.face);
test.roll();
console.log(test.face);
*/
