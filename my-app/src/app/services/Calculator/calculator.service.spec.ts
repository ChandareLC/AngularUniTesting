import { TestBed } from '@angular/core/testing';
import {CalculatorService} from "./calculator.service";
import {LoggerService} from "../Logger/logger.service";
describe('CalculatorService',() => {
  let mockLoggerService: any;
  let calculator: CalculatorService;
  beforeEach(()=> {
     console.log('calling before each');
     mockLoggerService = jasmine.createSpyObj('loggerService',['log']);
     calculator = new CalculatorService(mockLoggerService);
  });
  it('should add two number', () => {
    // @ts-ignore
    console.log('calling add');
    let mockLoggerService = jasmine.createSpyObj('loggerService',['log']);
    const calculator = new CalculatorService(mockLoggerService);
    let result = calculator.add(2,2);
    expect(result).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1)
  });
  it('should subtract two number', () => {
    // @ts-ignore
    console.log('calling subtract');
    let mockLoggerService = jasmine.createSpyObj('loggerService',['log']);
    const calculator = new CalculatorService(mockLoggerService);
    let result = calculator.substarct(2,2);
    expect(result).toBe(0);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1)
  });
})
