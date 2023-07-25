import { Component, OnInit } from '@angular/core';
import { AutherService } from '../services/auther.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators, AbstractControl, ValidationErrors, FormControl, ValidatorFn } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signupForm !: FormGroup;


  submitted = false;


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  //hook fun
  ngOnInit(): void {

    //object
    this.signupForm = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
        email: ['', [Validators.required, Validators.email, Validators.pattern]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
        isActive : this.formBuilder.control(false)
      },{
        validators: this.passwordMatchValidator
      }

    );
  }

  //validations
  get f(): { [key: string]: AbstractControl }
   {
    return this.signupForm.controls;
  }

  //password confirm
    passwordMatchValidator(FormGroup : FormGroup){

       const password = FormGroup.controls['password'].value;
       const confirmPassword = FormGroup.controls['confirmPassword'].value;

       return password === confirmPassword ? null : {mismatch : true};

    }

    

  signUp(): void {
    if (!this.submitted) {
     // this.submitted = true;
      if (this.signupForm.invalid) {
       // this.submitted = false;
       return;
      }

      this.http.post<any>("http://localhost:3000/signupUser", this.signupForm.value)
        .subscribe(res => {
          alert("signup successfull!");
          this.signupForm.reset();
          this.router.navigate(['home']);


        }, err => {
          alert("Something Went Wrong!")
        })
      this.submitted = false;
    }


  }

  onReset(): void {
    this.submitted = false;
    this.signupForm.reset();
  }






  //  static match(controlName: string, checkControlName: string): ValidatorFn {     return (controls: AbstractControl) => {
  //     const control = controls.get(controlName);
  //    const checkControl = controls.get(checkControlName);

  //        if (checkControl?.errors && !checkControl.errors['matching']) {
  //          return null;
  //        }

  //         if (control?.value !== checkControl?.value) {
  //           return { matching: true };
  //       } else {
  //       return null;
  //      }
  //    };
  //  }



}
