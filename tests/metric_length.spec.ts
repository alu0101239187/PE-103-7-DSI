import "mocha";
import { expect } from "chai";
import { ImperialLength } from "../src/imperial_length";
import { MetricLength } from "../src/metric_length";

describe("MetricLength class tests", () => {
  it("MetricLength constructor", () => {
    const imperial_length: ImperialLength = new ImperialLength();
    imperial_length.setInches(12.5);
    expect(new MetricLength(new ImperialLength())).to.be.instanceof(
      MetricLength
    );
    expect(new MetricLength(imperial_length)).to.be.instanceof(MetricLength);
  });

  it("Methods centimeters", () => {
    const imperial_length: ImperialLength = new ImperialLength();
    expect(new MetricLength(imperial_length).getInCentimeters()).to.be.equal(0);
    imperial_length.setInches(1);
    expect(new MetricLength(imperial_length).getInCentimeters()).to.be.equal(
      2.54
    );
    const metric_length: MetricLength = new MetricLength(new ImperialLength());
    metric_length.setCentimeters(10);
    expect(metric_length.getInCentimeters()).to.be.equal(10);
  });

  it("Methods meters", () => {
    const imperial_length: ImperialLength = new ImperialLength();
    expect(new MetricLength(imperial_length).getInMeters()).to.be.equal(0);
    imperial_length.setInches(10);
    expect(new MetricLength(imperial_length).getInMeters()).to.be.equal(0.254);
    const metric_length: MetricLength = new MetricLength(new ImperialLength());
    metric_length.setCentimeters(100);
    expect(metric_length.getInMeters()).to.be.equal(1);
    metric_length.setMeters(20);
    expect(metric_length.getInCentimeters()).to.be.equal(2000);
  });

  it("Methods kilometers", () => {
    const imperial_length: ImperialLength = new ImperialLength();
    expect(new MetricLength(imperial_length).getInKilometers()).to.be.equal(0);
    imperial_length.setInches(1000);
    expect(new MetricLength(imperial_length).getInKilometers()).to.be.equal(
      0.0254
    );
    const metric_length: MetricLength = new MetricLength(new ImperialLength());
    metric_length.setCentimeters(1000);
    expect(metric_length.getInKilometers()).to.be.equal(0.01);
    metric_length.setKilometers(20);
    expect(metric_length.getInCentimeters()).to.be.equal(2000000);
  });
});
