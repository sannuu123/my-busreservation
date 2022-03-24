import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Printticket } from './printticket';

@Injectable({
  providedIn: 'root'})
export class PrintticketService {

  constructor(private http:HttpClient) { }
  

getbooking(){
  return this.http.get("http://localhost:9095/rest/api/abus");

}
getsignup(){

 return this.http.get("http://localhost:9095/rest/api/signup");
  }

getbusseats(){
  return this.http.get("http://localhost:9095/rest/api/busseats");
}

getbusdetails(){
  return this.http.get("http://localhost:9095/rest/api/busdetails");
}


cancelbooking(cnb:Printticket)
  {
    return this.http.delete("http://localhost:9095/rest/api/abus/"+cnb.PnrNo);
  }
    
  }



