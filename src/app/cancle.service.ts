import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cancle } from './cancle';

@Injectable({
  providedIn: 'root'
})
export class CancleService {

  constructor(private myhttp:HttpClient) { }
  restUrl:string="http://localhost:9095/rest/api";
/*getAllCancle()
  {
    return this.myhttp.get(this.restUrl+"/customer")
  }*/

  deletebooking(ca:Cancle)
  {
return this.myhttp.delete(this.restUrl+"/customer/"+ca.custId);
  }
}