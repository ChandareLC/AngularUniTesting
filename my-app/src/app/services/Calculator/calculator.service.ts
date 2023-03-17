import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  add(n1:number, n2:number){
    let result = n1+n2;
    return result
  }

  substarct(n1:number,n2:number){
    let result = n1-n2;
    return result
  }

}
