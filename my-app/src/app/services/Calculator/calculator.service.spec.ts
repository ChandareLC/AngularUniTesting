import { TestBed } from '@angular/core/testing';
import {CalculatorService} from "./calculator.service";
import {LoggerService} from "../Logger/logger.service";
describe('CalculatorService',() => {
  it('should add two number', () => {
    // @ts-ignore
    let mockLoggerService = jasmine.createSpyObj('loggerService',['log']);
    const calculator = new CalculatorService(mockLoggerService);
    let result = calculator.add(2,2);
    expect(result).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1)
  });
  it('should subtract two number', () => {
    // @ts-ignore
    let mockLoggerService = jasmine.createSpyObj('loggerService',['log']);
    const calculator = new CalculatorService(mockLoggerService);
    let result = calculator.substarct(2,2);
    expect(result).toBe(0);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1)
  });
})
