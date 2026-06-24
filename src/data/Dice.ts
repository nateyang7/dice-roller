// src/data/Dice.ts

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
   * Get the current face.
   * @return {number} Current face of the dice.
   */
  get face(): number {
    return this._face;
  }

  /**
   * Roll the dice.
   */
  roll(): void {}
}
