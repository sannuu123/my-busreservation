import { Component, OnInit } from '@angular/core';
import { Busreservation } from '../busreservation';
import { BusreservationService } from '../busreservation.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private s:BusreservationService) { }

  ngOnInit(): void {
  }

  busreservation:Busreservation=new Busreservation();

  savesignup(signupform:any){
    this.busreservation=signupform.value;
    console.log(this.busreservation);
    this.s.addsignup(this.busreservation).subscribe(
      (data)=>{
        console.log(data);
        alert("sign up added");
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  
}
