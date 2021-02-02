import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { RegisterComponent } from './register/register.component';
import { PickuplocationComponent } from './pickuplocation/pickuplocation.component';
import { DroplocationComponent } from './droplocation/droplocation.component';
import { PhoneEmailComponent } from './phone-email/phone-email.component';
import { ProductdescriptionComponent } from './productdescription/productdescription.component';
import { PaymenttypeselectionComponent } from './paymenttypeselection/paymenttypeselection.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MakerequestComponent } from './makerequest/makerequest.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpInterceptorService } from './_services/httpInterceptor.service';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    SubscriptionComponent,
    RegisterComponent,
    PickuplocationComponent,
    DroplocationComponent,
    PhoneEmailComponent,
    ProductdescriptionComponent,
    PaymenttypeselectionComponent,
    AboutComponent,
    ContactComponent,
    MakerequestComponent,
    LogoutComponent,
    //FontawesomeDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
   // FontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }