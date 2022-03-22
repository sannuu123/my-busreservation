import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyprofilesComponent } from './myprofiles/myprofiles.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { BusseatsComponent } from './busseats/busseats.component';
import { PaymentComponent } from './payment/payment.component';
import { DebitcardComponent } from './debitcard/debitcard.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { UpitransactionComponent } from './upitransaction/upitransaction.component';
import { NetbankingComponent } from './netbanking/netbanking.component';
import { PrintticketComponent } from './printticket/printticket.component';
import { BussearchComponent } from './bussearch/bussearch.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { BookbusComponent } from './bookbus/bookbus.component';
import { CanclebusComponent } from './canclebus/canclebus.component';
import { DeletebusComponent } from './deletebus/deletebus.component';
import { AddbusComponent } from './addbus/addbus.component';
import { BusdetailsComponent } from './busdetails/busdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,//
    SignupComponent,//
    DashboardComponent,//
    ForgotpasswordComponent,//
    ChangepasswordComponent,//
    AboutUsComponent,//
    PrivacyPolicyComponent,//
    ContactUsComponent,//
    MyprofilesComponent,//
    FeedbacksComponent,//
    BusseatsComponent,//
    PaymentComponent,//
    DebitcardComponent,//
    CreditcardComponent,//
    UpitransactionComponent,//
    NetbankingComponent,//
    PrintticketComponent,//
    BussearchComponent,//
    CustomerdetailsComponent,//
    BookbusComponent,//
    CanclebusComponent,//
    DeletebusComponent,//
    AddbusComponent, BusdetailsComponent//
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
