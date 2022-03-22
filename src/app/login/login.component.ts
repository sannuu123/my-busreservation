import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Busreservation } from '../busreservation';
import { BusreservationService } from '../busreservation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private brs:BusreservationService,private myrouter:Router) { }

  ngOnInit(): void {
  }

   
  loginValues:any;
  loginValid:any;
  validateLogin(loginForm:any)
  {
    console.log(loginForm.value);
    this.loginValues=loginForm.value;
    console.log(this.loginValues);
    
    this.brs.validateLogin(this.loginValues).subscribe(
      (data)=>
      {
          console.log(data);
          this.loginValid=data;
          if(this.loginValid)
            {
                localStorage.setItem("loginid",this.loginValues.loginid);
                this.myrouter.navigate(['\dashboard']);
            }
            else
            {
              alert("User Invalid");
            }
      }
    )
  }
}
