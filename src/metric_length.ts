import { ImperialLength } from "./imperial_length";

export class MetricLength {
  private _value: number;

  constructor(imperial_length: ImperialLength) {
    this._value = imperial_length.getInInches() * 2.54;
  }

  /**
   * Returns the length in centimeters
   * @return Length in centimeters
   */
  public getInCentimeters(): number {
    return this._value;
  }

  /**
   * Returns the length in meters
   * @return Length in meters
   */
  public getInMeters(): number {
    return this._value / 100;
  }

  /**
   * Returns the length in kilometers
   * @return Length in kilometers
   */
  public getInKilometers(): number {
    return this._value / 100000;
  }

  /**
   * Sets a new length in centimeters
   * @param value Length in centimeters
   */
  public setCentimeters(value: number): void {
    this._value = value;
  }

  /**
   * Sets a new length in meters
   * @param value Length in meters
   */
  public setMeters(value: number): void {
    this._value = value * 100;
  }

  /**
   * Sets a new length in kilometers
   * @param value Length in kilometers
   */
  public setKilometers(value: number): void {
    this._value = value * 100000;
  }
}
