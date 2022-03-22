import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bus } from './bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private myhttp:HttpClient) { }

  // restUrl:string="http://localhost:9091/rest/api";
  restUrl:string="http://localhost:9090/rest/api";

  getAllBus()
  {
    return this.myhttp.get(this.restUrl+"/bus")
  }
  addBus(bs:Bus)
  {
return this.myhttp.post(this.restUrl+"/bus",bs);
  }
bussearch(srchfrom:any,srchto:any,srchdoj:any)
{
  return this.myhttp.get(this.restUrl+"/bus/"+srchfrom+"/"+srchto+"/"+srchdoj);
 
}
}
