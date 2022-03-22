import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedbacks } from './feedbacks';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private myhttp:HttpClient) { }

 restUrl:string="http://localhost:9090/rest/api";
  // restUrl:string="http://localhost:9098/rest/api";

  addProfile(pfe:Profile)
  {
    return this.myhttp.post(this.restUrl+"/profile",pfe)
  }
  addFeedback(fdbk:Feedbacks)
  {
    return this.myhttp.post(this.restUrl+"/feedback",fdbk)
  }
  
  updateProfile(upfe:Profile)
  {
    return this.myhttp.post(this.restUrl+"/profile",upfe)
  }
}
