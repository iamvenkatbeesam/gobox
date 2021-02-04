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
  isSubmitted=false;
  payment_selection:FormGroup
  pick_address:FormGroup;
  userrequestforproduct__makerequest:FormGroup;
   drop_address:FormGroup;
  // payment:FormGroup;
  submitted = false;
   check = false;
   verify = false;
  // registered = false;
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
         { text: 'Finish', class: 'btn btn-info', event: () => { 
          console.log(this.userrequestforproduct__makerequest.value,
                      this.pick_address.value,
                      this.drop_address.value,
                       this.payment_selection.value
                     ); } }
      ],
     }
   };
 
  constructor(private formBuilder: FormBuilder,
    private ngWizardService: NgWizardService
              ) {
  }


  ngOnInit(): void {
   this.userrequestforproduct__makerequest = this.formBuilder.group({
    userId:[''],
    pickupAddressId:['' ],
      dropAddressId:['' ],
      paymentId:[''],
      productDes:['',Validators.required]

      
    });
     this.pick_address = this.formBuilder.group({
      
       addressline1:['',Validators.required],
       addressline2:['',Validators.required],
       zipcode:['',Validators.required],
        city:['',Validators.required],
        county:['',Validators.required],
        country:['',Validators.required],
        postcode:['',Validators.required]

     });
     this.drop_address = this.formBuilder.group({
      
       addressline1:['',Validators.required],
       addressline2:['',Validators.required],
       zipcode:['',Validators.required],
        city:['',Validators.required],
        county:['',Validators.required],
        country:['',Validators.required],
        postcode:['',Validators.required]

     });

    //  this.payment = this.formBuilder.group({
      
    //    creditcard:['',Validators.required],
    //    debitcard:['',Validators.required],
    //    upi:['',Validators.required]
    //  });

     this.payment_selection = this.formBuilder.group({
       payment: ['', Validators.required]
     })

   }
 get myForm() {  
    return this.payment_selection.get("payment");
  }
  get formData(){
    return this.userrequestforproduct__makerequest.controls;
   }
    get addressform(){
     return this.pick_address.controls;
    }

    get contactform(){
     return this.drop_address.controls;
    }

  //  get paymentform(){
  //   return this.payment.controls;
  //  }
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
    
    this.submitted = true;
    if(this.userrequestforproduct__makerequest.invalid){
      return;
    }
    return true;
    
  }
   isaddressformvalid(args: StepValidationArgs,form:any) {
     console.log(form);
    this.check = true;
     if(this.pick_address.invalid){
       return;
     }
     return true;
    
   }

   iscontactdetailsformvalid(args: StepValidationArgs,form:any) {
     console.log(form);
     this.verify = true;
     if(this.drop_address.invalid){
       return;
     }
     return true;
    
   }

  // ispaymentdetailsformvalid(args: StepValidationArgs,form:any) {
  //   console.log(form);
  //   this.registered = true;
  //   if(this.payment.invalid){
  //     return;
  //   }
  //   return true;
    
  // }
 
   isValidFunctionReturnsObservable(args: StepValidationArgs) {
     return of(true);
   }

}
