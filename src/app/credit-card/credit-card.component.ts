import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  ;

  constructor( private _router: Router ) { }
  onresrvationClick():void{
    this._router.navigate(['/reservation']);

  }

  ngOnInit(): void {
  }

  }