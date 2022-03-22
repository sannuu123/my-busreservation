import { Component, OnInit } from '@angular/core';
import { Add } from '../add';
import { AddService } from '../add.service';


@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent implements OnInit {

  constructor(private ad:AddService) { }

  ngOnInit(): void {
  }

  add : Add=new Add();
  addbus(addbusForm:any)
  {
  this.add=addbusForm.value;
  console.log(this.add);
  this.ad.addCustomer(this.add).subscribe(
    (data)=>{
      alert("Added");
    },
  (error)=>
  {
    console.log(error);
  }
  )
  }
}
