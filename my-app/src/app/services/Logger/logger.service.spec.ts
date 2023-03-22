import {LoggerService} from "./logger.service";
import {TestBed} from "@angular/core/testing";
import {of} from "rxjs";

describe('LoggerService',()=>{
  let service: LoggerService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[LoggerService],
    });
    service = TestBed.inject(LoggerService);
  })

  it('should not have any message at starting', ()=> {
    //arrange
   // const service = new LoggerService();

    //act
    let count = service.message.length;

    //assert
    expect(count).toBe(0);
  })

  it('should add the message when log is called', ()=> {
    //arrange
   // const service = new LoggerService();

    //act
    service.log('message');

    //assert
    expect(service.message.length).toBe(1);
  })

  it('should clear all the message when clear is called', ()=> {
    //arrange
   // const service = new LoggerService();
    service.log('message');

    //act
    service.clear();

    //assert
    expect(service.message.length).toBe(0);
  })
})
