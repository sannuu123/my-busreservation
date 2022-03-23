import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Busreservation } from '../busreservation';
import { BusreservationService } from '../busreservation.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private brs:BusreservationService,private myrouter:Router) { }

  ngOnInit(): void {
  }

  loginValues:any;
  loginValid:any;
  adminvalidateLogin(loginForm:any)
  {
    console.log(loginForm.value);
    this.loginValues=loginForm.value;
    console.log(this.loginValues);
    
    this.brs.adminvalidateLogin(this.loginValues).subscribe(
      (data)=>
      {
          console.log(data);
          this.loginValid=data;
          if(this.loginValid)
            {
                localStorage.setItem("loginid",this.loginValues.loginid);
                this.myrouter.navigate(['\admindashboard']);
            }
            else
            {
              alert("User Invalid");
            }
      }
    )

  }

}
