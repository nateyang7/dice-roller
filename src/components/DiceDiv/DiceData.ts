// src/components/DiceDiv/DiceData.ts

/** Class representing a dice. */
export class Dice {
  /** ID of the dice (Add 1 for after a new instance). */
  private static ID: number = 0;

  /** Dice's unique ID. */
  private _id: number;

  /** Label of the dice (always in uppercase). */
  private _label: string;

  /** Number of faces of the dice (Interval: [1, _faces]). */
  private _faces: number;

  /** Current face of the dice. */
  private _face: number = 1;

  /**
   * Creates a dice.
   * @param {number} faces - Number of faces on the dice.
   */
  constructor(faces: number) {
    Dice.ID++;
    this._id = Dice.ID;
    this._label = "D" + String(faces).toLocaleUpperCase();
    this._faces = faces;
  }

  /**
   * Get the dice unique ID.
   * @return {number} Unique ID of the dice.
   */
  get id(): number {
    return this._id;
  }

  /**
   * Get the label of the dice.
   * @return {string} Label of the dice.
   */
  get label(): string {
    return this._label;
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
