import { Component, OnInit } from '@angular/core';
import { Cancle } from '../cancle';
import { CancleService } from '../cancle.service';




@Component({
  selector: 'app-canclebus',
  templateUrl: './canclebus.component.html',
  styleUrls: ['./canclebus.component.css']
})
export class CanclebusComponent implements OnInit {

  constructor(private cn:CancleService) { }

  ngOnInit(): void {
  }
  cancle : Cancle=new Cancle();
  deletebooking(canclebusForm:any)
  {
  this.cancle=canclebusForm.value;
  console.log(this.cancle);
  this.cn.deletebooking(this.cancle).subscribe(
    (data)=>{
      alert("successfully cancled");
    },
  (error)=>
  {
    console.log(error);
  }
  )
  }
}
