import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-myprofiles',
  templateUrl: './myprofiles.component.html',
  styleUrls: ['./myprofiles.component.css']
})
export class MyprofilesComponent implements OnInit {

  constructor(private pfl:ProfileService) { }

  ngOnInit(): void {
  }

  profile:Profile=new Profile();

  saveProfile(profileForm:any)
  {
    this.profile=profileForm.value;
    console.log(this.profile);
    this.pfl.addProfile(this.profile).subscribe(
      (data)=>{
        console.log(data);
        alert("profile saved!")
      },
      (error)=>
      {console.log(error)}
    )
  }



}
