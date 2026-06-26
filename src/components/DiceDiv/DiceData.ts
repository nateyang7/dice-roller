// src/components/DiceDiv/DiceData.ts

/** Class representing a dice. */
export class Dice {
  /** ID of the dice (Add 1 for after a new instance). */
  private static ID: number = 0;

  /** Dice's unique ID. */
  private _id: number;

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
   * Get the number of faces of the dice.
   * @return {number} Number of faces of the dice.
   */
  get faces(): number {
    return this._faces;
  }

  /**
   * Set a new number of faces for the dice.
   */
  set faces(newFaces: number) {
    if (newFaces < 2) {
      throw new Error("New faces must be superior to 2");
    }
    this._faces = newFaces;
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
