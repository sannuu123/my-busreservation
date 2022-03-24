import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddbusComponent } from './addbus/addbus.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookbusComponent } from './bookbus/bookbus.component';
import { BusdetailsComponent } from './busdetails/busdetails.component';
import { BussearchComponent } from './bussearch/bussearch.component';
import { BusseatsComponent } from './busseats/busseats.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { CanclebusComponent } from './canclebus/canclebus.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { DeletebusComponent } from './deletebus/deletebus.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { MyprofilesComponent } from './myprofiles/myprofiles.component';
import { NetBankingComponent } from './net-banking/net-banking.component';
import { PaymentComponent } from './payment/payment.component';
import { PrintticketComponent } from './printticket/printticket.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { UPITransactionComponent } from './upitransaction/upitransaction.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'privacypolicy',component:PrivacyPolicyComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'adminlogin',component:AdminloginComponent},
  // sahana's components
  {path:'bussearch',component:BussearchComponent},//processing
  {path:'bookbus',component:BookbusComponent}, //processing
  {path:'cancelbus',component:CanclebusComponent},//processing
  {path:'deletebus',component:DeletebusComponent},//processing
  {path:'addbus',component:AddbusComponent},//processing
  //srinu
  {path:'busdetails',component:BusdetailsComponent},//processing
  {path:'busseats',component:BusseatsComponent},//processing
  //dhananjay
  {path:'feedbacks',component:FeedbacksComponent}, 
  {path:'myprofile',component:MyprofilesComponent},
  {path:'updateprofile',component:UpdateprofileComponent},
  //naveed
  {path:'cancelbooking',component:CancelbookingComponent},
  {path:'creditcard',component:CreditCardComponent},
  {path:'debitcard',component:DebitCardComponent},
  {path:'netbanking',component:NetBankingComponent},
  {path:'payment',component:PaymentComponent},
  {path:'printticket',component:PrintticketComponent},
  {path:'reservation',component:ReservationComponent},
  {path:'upitransaction',component:UPITransactionComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
