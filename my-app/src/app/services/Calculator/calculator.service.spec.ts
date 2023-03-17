import { TestBed } from '@angular/core/testing';
import {CalculatorService} from "./calculator.service";
import {LoggerService} from "../Logger/logger.service";
describe('CalculatorService',() => {
  it('should add two number', () => {
    // @ts-ignore
    let loggerService = new LoggerService();
    const calculator = new CalculatorService(loggerService);
    let result = calculator.add(2,2);
    expect(result).toBe(4);
  });
  it('should subtract two number', () => {
    // @ts-ignore
    let loggerService = new LoggerService();
    const calculator = new CalculatorService(loggerService);
    let result = calculator.substarct(2,2);
    expect(result).toBe(0);

  });
})
