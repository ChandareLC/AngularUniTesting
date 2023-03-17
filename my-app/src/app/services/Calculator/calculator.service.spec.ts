import { TestBed } from '@angular/core/testing';
import {CalculatorService} from "./calculator.service";
describe('CalculatorService',() => {
  it('should add two number', () => {
    // @ts-ignore
    const calculator = new CalculatorService();
    let result = calculator.add(2,2);
    expect(result).toBe(4);
  });
  it('should subtract two number', () => {
    // @ts-ignore
    const calculator = new CalculatorService();
    let result = calculator.substarct(2,2);
    expect(result).toBe(0);

  });
})
