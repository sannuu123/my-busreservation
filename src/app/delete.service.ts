import { Injectable } from '@angular/core';
import { Delete } from './delete';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private myhttp:HttpClient) { }
  // restUrl:string="http://localhost:9096/rest/api";  
  restUrl:string="http://localhost:9090/rest/api";

  /*getAllCancle()
    {
      return this.myhttp.get(this.restUrl+"/customer")
    }*/
  
    deletebus(da:Delete)
    {
  return this.myhttp.delete(this.restUrl+"/abus/"+da.busId);
    }
  }