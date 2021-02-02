import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME } from 'ng-wizard';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-makerequest',
  templateUrl: './makerequest.component.html',
  styleUrls: ['./makerequest.component.css']
})
export class MakerequestComponent implements OnInit {
  address:FormGroup;
  regForm:FormGroup;
  contact:FormGroup;
  payment:FormGroup;
  submitted = false;
  check = false;
  verify = false;
  registered = false;
  public newData:any;
  
  
  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };
  
  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
    toolbarSettings: {
      toolbarExtraButtons: [
        { text: 'Finish', class: 'btn btn-info', event: () => { alert("Finished!!!"); } }
      ],
    }
  };
 
  constructor(private formBuilder: FormBuilder,
    private ngWizardService: NgWizardService
              ) {
  }


  ngOnInit(): void {
   this.regForm = this.formBuilder.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
      
    });
    this.address = this.formBuilder.group({
      
      address1:['',Validators.required],
      address2:['',Validators.required],
      landmark:['',Validators.required]
    });
    this.contact = this.formBuilder.group({
      
      contact1:['',Validators.required],
      contact2:['',Validators.required],
      location:['',Validators.required]
    });

    this.payment = this.formBuilder.group({
      
      creditcard:['',Validators.required],
      debitcard:['',Validators.required],
      upi:['',Validators.required]
    });

  }

  get formData(){
    return this.regForm.controls;
   }
   get addressform(){
    return this.address.controls;
   }

   get contactform(){
    return this.contact.controls;
   }

   get paymentform(){
    return this.payment.controls;
   }
  showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }
 
  showNextStep(event?: Event) {
    this.ngWizardService.next();
  }
 
  resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }
 
  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }
  
  stepChanged(args: StepChangedArgs) { 
  }
 
  isValidTypeBoolean: boolean = true;
  
  isValidFunctionReturnsBoolean(args: StepValidationArgs,form:any) {
    console.log(form);
    this.submitted = true;
    if(this.regForm.invalid){
      return;
    }
    return true;
    
  }
  isaddressformvalid(args: StepValidationArgs,form:any) {
    console.log(form);
    this.check = true;
    if(this.address.invalid){
      return;
    }
    return true;
    
  }

  iscontactdetailsformvalid(args: StepValidationArgs,form:any) {
    console.log(form);
    this.verify = true;
    if(this.contact.invalid){
      return;
    }
    return true;
    
  }

  ispaymentdetailsformvalid(args: StepValidationArgs,form:any) {
    console.log(form);
    this.registered = true;
    if(this.payment.invalid){
      return;
    }
    return true;
    
  }
 
  isValidFunctionReturnsObservable(args: StepValidationArgs) {
    return of(true);
  }

}
