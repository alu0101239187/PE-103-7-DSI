export class ImperialLength {
  private _value: number;

  constructor() {
    this._value = 0;
  }

  /**
   * Returns the length in inches
   * @return Length in inches
   */
  public getInInches(): number {
    return this._value;
  }

  /**
   * Returns the length in feet
   * @return Length in feet
   */
  public getInFeet(): number {
    return this._value / 12;
  }

  /**
   * Returns the length in yards
   * @return Length in yards
   */
  public getInYards(): number {
    return this._value / 36;
  }

  /**
   * Returns the length in miles
   * @return Length in miles
   */
  public getInMiles(): number {
    return this._value / 63360;
  }

  /**
   * Sets a new length in inches
   * @param value Length in inches
   */
  public setInches(value: number): void {
    this._value = value;
  }

  /**
   * Sets a new length in feet
   * @param value Length in feet
   */
  public setFeet(value: number): void {
    this._value = value * 12;
  }

  /**
   * Sets a new length in yards
   * @param value Length in yards
   */
  public setYards(value: number): void {
    this._value = value * 36;
  }

  /**
   * Sets a new length in miles
   * @param value Length in miles
   */
  public setMiles(value: number): void {
    this._value = value * 63360;
  }
}
