import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
// import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form  : FormGroup;
  result: any;
  user  : any;
  subscription: Subscription;
  
  @Output() isLoggedIn = new EventEmitter();

  constructor(
    private formSignIn: FormBuilder,
    private http      : HttpClient,
    // private shared    : SharedService,
    private data      : DataService,
    private route     : Router    
  ) { }
    
  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(message => this.user = message)
    this.form = this.formSignIn.group({
      username : '',
      password : ''
    })
    
  }
  
  submit(): void {
    // console.log(this.form.getRawValue());
    this.http.post('http://localhost:8000/auth/signin', this.form.getRawValue())
      .subscribe({
        next: Response => {
          console.log(Response);
          this.result = Response;
          this.data.changeMessage(Response);
          this.route.navigateByUrl('/');
          // this.shared.setuser(this.result);
          
        },
        error: error   => {
          this.result = "Incorrect username/password";
          console.log(this.result);
        }
      });
  }

}
