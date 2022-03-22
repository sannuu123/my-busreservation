import { Component, OnInit } from '@angular/core';
import { Feedbacks } from '../feedbacks';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {

  constructor(private fdb:ProfileService) { }

  ngOnInit(): void {
  }

  feedback:Feedbacks=new Feedbacks();

  saveFeedback(feedbackForm:any)
  {
    this.feedback=feedbackForm.value;
    console.log(this.feedback);
    this.fdb.addFeedback(this.feedback).subscribe(
      (data)=>{
        console.log(data);
        alert("Thank you for your feedback!")
      },
      (error)=>
      {console.log(error)}
    )
  }
}
