import { Component, OnInit } from '@angular/core';
import { Delete } from '../delete';
import { DeleteService } from '../delete.service';

@Component({
  selector: 'app-deletebus',
  templateUrl: './deletebus.component.html',
  styleUrls: ['./deletebus.component.css']
})
export class DeletebusComponent implements OnInit {

  constructor(private dn:DeleteService) { }

  ngOnInit(): void {
  }
  delete : Delete=new Delete();
  deletebus(deletebusForm:any)
  {
  this.delete=deletebusForm.value;
  console.log(this.delete);
  this.dn.deletebus(this.delete).subscribe(
    (data)=>{
      alert("Delete");
    },
  (error)=>
  {
    console.log(error);
  }
  )
  }
}