import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private  myhttp:HttpClient) { }
  
  restUrl:string="http://localhost:9095/rest/api";
  getAllBook()
  {
    return this.myhttp.get(this.restUrl+"/customer")
  }

  addCustomer(beh:Book)
  {
return this.myhttp.post(this.restUrl+"/customer",beh);
  }
}
