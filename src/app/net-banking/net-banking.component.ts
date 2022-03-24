
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-net-banking',
  templateUrl: './net-banking.component.html',
  styleUrls: ['./net-banking.component.css']
})
export class NetBankingComponent implements OnInit {

 
  constructor( private _router: Router ) { }
  onresrvationClick():void{
    this._router.navigate(['/reservation']);

  }

 
  
  
     
  ngOnInit(): void {
  }



}

//
