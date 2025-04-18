export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // cloneCar returns a new instance of the same class (preserving the subclass type)
  cloneCar() {
    const Constructor = this.constructor[Symbol.species] || this.constructor;
    return new Constructor();
  }

  // Optional: set up [Symbol.species] to allow subclassing control
  static get [Symbol.species]() {
    return this;
  }
}
