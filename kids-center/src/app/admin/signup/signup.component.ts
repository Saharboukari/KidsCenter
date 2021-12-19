import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { url } from 'inspector';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form  : FormGroup;
  showSpecialty: boolean = false;

  constructor(
      private formSignUp: FormBuilder,
      private http      : HttpClient,
      private route     : Router
    ) { }

  ngOnInit(): void {
    this.form = this.formSignUp.group({
      specialty: '',
      category: '',
      fullname: '',
      username: '',
      email   : '',
      password: '',
      phone   : '',
      address : '',
      city    : ''
    });
  }

  show(){
    this.showSpecialty = true;
  }

  submit(): void {
    console.log(this.form.getRawValue());
    this.http.post('http://localhost:8000/auth/signup', this.form.getRawValue())
    .subscribe({
      next:Response => {
        console.log("Al right", Response);
        this.route.navigateByUrl('signin');
      },
      error:error   => console.log("error", error)
    });
    
  }
    
}
