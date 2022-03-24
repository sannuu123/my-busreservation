import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrintticketService } from '../printticket.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

 
  booking:any;
  signup:any;
  busseats:any;

  constructor(private _router: Router, private service: PrintticketService) { }

  onprintticketClick():void{
    this._router.navigate(['/printticket']);

  }
  
  oncancelbooking():void{
    this._router.navigate(['/cancelbooking']);

  }




  ngOnInit(): void {
  
   this.booking=this.service.getbooking().subscribe(data=>this.booking=data);

   this.signup=this.service.getsignup().subscribe(data=>this.signup=data);

   this.signup=this.service.getbusseats().subscribe(data=>this.busseats=data);

  }
    
}

