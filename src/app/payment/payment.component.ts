import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor( private _router: Router  ) { }

  onNetBankingClick():void{
    this._router.navigate(['/netbanking']);

  }

 
  oncreditcardClick():void{
    this._router.navigate(['/creditcard']);

  }

  ondebitcardClick():void{
    this._router.navigate(['/debitcard']);

  }
  onupitransactionClick():void{
    this._router.navigate(['/upitransaction']);

    
 



  }

  ngOnInit(): void {
  }

}

