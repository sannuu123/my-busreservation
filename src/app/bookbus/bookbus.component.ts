import { Component, OnInit } from '@angular/core';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Book } from '../book';
import { BookService } from '../book.service';


@Component({
  selector: 'app-bookbus',
  templateUrl: './bookbus.component.html',
  styleUrls: ['./bookbus.component.css']
})
export class BookbusComponent implements OnInit {

  constructor(private beh:BookService) { }

  ngOnInit(): void {
  }
  book : Book=new Book();
  
bookbus(bookbusForm:any)
{
this.book=bookbusForm.value;
console.log(this.book);
this.beh.addCustomer(this.book).subscribe(
  (data)=>{
    alert("details save");
  },
(error)=>
{
  console.log(error);
}
)
}
}
