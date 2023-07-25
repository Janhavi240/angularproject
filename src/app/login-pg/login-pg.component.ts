import { HttpClient } from '@angular/common/http';
import { Component, Directive, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators, NgForm, AbstractControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-pg',
  templateUrl: './login-pg.component.html',
  styleUrls: ['./login-pg.component.css'],

})



export class LoginPgComponent implements OnInit {

  public loginform !: FormGroup

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void
   {
        this.loginform = this.formBuilder.group({

          email:['' ,Validators.required],
          password :['',Validators.required]
        })


  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginform.controls;
  }

  Login(): void{



    this.http.get<any>("http://localhost:3000/signupUser")
    .subscribe(res=>{
       const user = res.find((a:any)=>{
        return a.email === this.loginform.value.email && a.password === this.loginform.value.password
       });
       if(user){
        alert("Login Success!!");
         this.loginform.reset()
        this.router.navigate(['/home'])
       }else{
        alert("user not found");
       }
    },err=>{
      alert("something went wrong!!")
    })


  }



  }

