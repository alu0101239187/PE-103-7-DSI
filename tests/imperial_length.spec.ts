import "mocha";
import { expect } from "chai";
import { ImperialLength } from "../src/imperial_length";

describe("ImperialLength class tests", () => {
  it("ImperialLength constructor", () => {
    expect(new ImperialLength()).to.be.instanceof(ImperialLength);
  });

  it("Methods inches", () => {
    const imperial_length: ImperialLength = new ImperialLength();
    expect(imperial_length.getInInches()).to.be.equal(0);
    imperial_length.setInches(12.5);
    expect(imperial_length.getInInches()).to.be.equal(12.5);
    imperial_length.setInches(50000);
    expect(imperial_length.getInInches()).to.be.equal(50000);
  });

  it("Methods feet", () => {
    const imperial_length: ImperialLength = new ImperialLength();
    expect(imperial_length.getInFeet()).to.be.equal(0);
    imperial_length.setFeet(12.5);
    expect(imperial_length.getInFeet()).to.be.equal(12.5);
    expect(imperial_length.getInInches()).to.be.equal(150);
    imperial_length.setInches(50000);
    expect(imperial_length.getInFeet()).to.be.equal(50000 / 12);
  });

  it("Methods yard", () => {
    const imperial_length: ImperialLength = new ImperialLength();
    expect(imperial_length.getInYards()).to.be.equal(0);
    imperial_length.setYards(12.5);
    expect(imperial_length.getInYards()).to.be.equal(12.5);
    expect(imperial_length.getInInches()).to.be.equal(450);
    imperial_length.setInches(50000);
    expect(imperial_length.getInYards()).to.be.equal(50000 / 36);
  });

  it("Methods miles", () => {
    const imperial_length: ImperialLength = new ImperialLength();
    expect(imperial_length.getInMiles()).to.be.equal(0);
    imperial_length.setMiles(12.5);
    expect(imperial_length.getInMiles()).to.be.equal(12.5);
    expect(imperial_length.getInInches()).to.be.equal(792000);
    imperial_length.setInches(50000);
    expect(imperial_length.getInMiles()).to.be.equal(50000 / 63360);
  });
});
