import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrintticketService } from '../printticket.service';




@Component({
  selector: 'app-printticket',
  templateUrl: './printticket.component.html',
  styleUrls: ['./printticket.component.css']
})
export class PrintticketComponent implements OnInit {

 
  booking:any;
  signup:any;
  busdetails:any;

  constructor(private  service:PrintticketService) { }

  ngOnInit(): void {

  
    this.booking=this.service.getbooking().subscribe(data=>this.booking=data);

    this.booking=this.service.getsignup().subscribe(data=>this.signup=data);

    this.booking=this.service.getbusdetails().subscribe(data=>this.busdetails=data);


    
    
    

  }


}
