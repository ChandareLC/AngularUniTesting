import {TestBed} from "@angular/core/testing";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";

let testUrl ='./data';
interface Data{
  name:String;
}
describe('Http Client  Testing Module', ()=>{
  let httpClient:HttpClient;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    httpClient= TestBed.inject(HttpClient);
  });
  it('should call the testurl with get Request',()=>{
    httpClient.get<Date>(testUrl).subscribe();
  });
});
