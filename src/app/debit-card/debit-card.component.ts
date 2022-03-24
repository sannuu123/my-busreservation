import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-debit-card',
  templateUrl: './debit-card.component.html',
  styleUrls: ['./debit-card.component.css']
})
export class DebitCardComponent implements OnInit {

  
  constructor( private _router: Router ) { }
  onresrvationClick():void{
    this._router.navigate(['/reservation']);

  }

  ngOnInit(): void {
  }

}
