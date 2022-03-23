import { Component, OnInit } from '@angular/core';
import { BusreservationService } from '../busreservation.service';
import { Contactus } from '../contactus';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private s:BusreservationService) { }

  ngOnInit(): void {
  }
  
  contactus:Contactus=new Contactus();

  savecontactus(contactusform:any){
    this.contactus=contactusform.value;
    console.log(this.contactus);
    this.s.addcontactus(this.contactus).subscribe(
      (data)=>{
        console.log(data);
        alert("Message sent successfully..!");
      },
      (error)=>{
        console.log(error)
      }
    )


  }

}
