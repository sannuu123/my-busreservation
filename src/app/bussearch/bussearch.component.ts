import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';
import { BusdetailsComponent } from '../busdetails/busdetails.component';

@Component({
  selector: 'app-bussearch',
  templateUrl: './bussearch.component.html',
  styleUrls: ['./bussearch.component.css']
})
export class BussearchComponent implements OnInit {

  constructor(private bs:BusService,private myrouter:Router) { }
  ngOnInit(): void {
  }

  srchfrom:any;
  srchto:any;
  srchdoj:any;
  busList:any;
  searchvalues:any;

  searchmethod(searchdata:any)
{
  this.searchvalues=searchdata.value;
  console.log(this.searchvalues.srchfrom);
  console.log(this.searchvalues.srchto);
  console.log(this.searchvalues.srchdoj);


  localStorage.setItem('fcity',this.searchvalues.srchfrom);
  localStorage.setItem('tcity',this.searchvalues.srchto);
  localStorage.setItem('doj',this.searchvalues.srchdoj);


  this.myrouter.navigate(['/busdetails']);

  



}

}

