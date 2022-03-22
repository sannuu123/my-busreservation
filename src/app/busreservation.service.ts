import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Busreservation } from './busreservation';

@Injectable({
  providedIn: 'root'
})
export class BusreservationService {

  constructor(private myhttp:HttpClient) { }

  restUrl:string="http://localhost:9090/rest/api";


  addsignup(brs:Busreservation){
    return this.myhttp.post(this.restUrl+"/signup",brs);
  }

  validateLogin(logValues:any)
  {
    return this.myhttp.get(this.restUrl+"/validatelogin/"+logValues.loginid+"/"+logValues.passwd);
  }

}
