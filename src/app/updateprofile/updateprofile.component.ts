import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  constructor(private upd:ProfileService) { }

  ngOnInit(): void {
  }

  profile:Profile=new Profile();

  updateProfile(updateprofileForm:any)
  {
    this.profile=updateprofileForm.value;
    console.log(this.profile);
    this.upd.updateProfile(this.profile).subscribe(
      (data)=>{
        console.log(data);
        alert("profile updated!")
      },
      (error)=>
      {console.log(error)}
    )
  }
}