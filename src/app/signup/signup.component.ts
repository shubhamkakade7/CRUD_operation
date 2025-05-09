import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

constructor(private appservice: AppServiceService, private router: Router){}

signupForm = new FormGroup({
  name : new FormControl(''),
  email : new FormControl(''),
  mobile : new FormControl(''),
  password : new FormControl(''),
})

onSubmit(){
  this.appservice.onSignUp(this.signupForm.value).subscribe(res =>{
    alert("Data added successfully");
    this.signupForm.reset();
    this.router.navigate(['/login']);
  }), (err: any)=>{
    console.log(err);
    alert("signup Error");
  }
}
}
