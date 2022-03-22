import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusreservationService } from '../busreservation.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private bsr:BusreservationService,private myrouter:Router) { }

  ngOnInit(): void {
  }

  changepass(ChangepassForm:any){

  }
}
