import { Component, OnInit } from '@angular/core';
import { Printticket } from '../printticket';
import { PrintticketService } from '../printticket.service';

@Component({
  selector: 'app-cancelbooking',
  templateUrl: './cancelbooking.component.html',
  styleUrls: ['./cancelbooking.component.css']
})
export class CancelbookingComponent implements OnInit {

  constructor( private cnb:PrintticketService ) { }
printticket:Printticket=new Printticket
  ngOnInit(): void {
  }
  deletebooking(deleteBusForm : any)
  {
    this.printticket=deleteBusForm.value;
    console.log(this.printticket);
    this.cnb.cancelbooking(this.printticket).subscribe(
      (data)=>
      {
        console.log(data);
        alert("Bus Cancelled")
      },
      (error)=>
      {
        console.log(error)
      }
    )
  }


}
