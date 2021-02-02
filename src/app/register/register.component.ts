
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first, catchError, retry } from 'rxjs/operators';
import { AlertService,  AuthenticationService } from '../_services';
import { MedicalserviceService } from '../_services/medicalservice.service';
import { User } from '../_models';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    userregister: User;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private medicalService: MedicalserviceService,
        private alertService: AlertService,
        private http: HttpClient
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            emailId: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(2)]],
            confirmpassword: ['', [Validators.required, Validators.minLength(2)]]
        });
    }

  
    // convenience getter for easy access to form fields
      get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        //if (this.registerForm.invalid) {
        //    return;
       // }
        alert("in submit3");
        this.loading = true;

        alert(JSON.stringify(this.registerForm.value));


        this.medicalService.createUser(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    
   /*  
    newUser(): void {
        this.submitted = false;
        this.userregister = new User();
      }

      save() {
        alert("create user1");
        this.medicalService
        .createUser(this.userregister).subscribe((data: any) => {
          console.log(data)
          this.userregister = new Userregister();
          this.gotoList();
        }, 
        error => console.log(error));
      }
     
      onSubmit() {
        this.submitted = true;
        this.save();    
      }
    
      gotoList() {
        this.router.navigate(['/login']);
      }

*/
}