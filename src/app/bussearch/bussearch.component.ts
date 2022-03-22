import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-bussearch',
  templateUrl: './bussearch.component.html',
  styleUrls: ['./bussearch.component.css']
})
export class BussearchComponent implements OnInit {

  srchfrom:any;
  srchto:any;
  srchdoj:any;
  busList:any;

  searchvalues:any;

  constructor(private bs:BusService ) { }

  ngOnInit(): void {
  }
  searchmethod(searchdata:any)
{
  this.searchvalues=searchdata.value;
  console.log(this.searchvalues.srchfrom);
  console.log(this.searchvalues.srchto);
  console.log(this.searchvalues.srchdoj);

  localStorage.setItem('fcity',this.searchvalues.srchfrom);
  localStorage.setItem('tcity',this.searchvalues.srchto);
  localStorage.setItem('doj',this.searchvalues.srchdoj);

}

}
