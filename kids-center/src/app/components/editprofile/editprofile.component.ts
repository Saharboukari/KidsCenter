import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  user:any;
  subscription:Subscription;
  form  : FormGroup;
  constructor(
    private formEditprofile: FormBuilder,
    private http      : HttpClient,
    private route     : Router,
    private data :DataService
  ) { }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe((message: any) => {
      this.user = message;
      console.log("app component ", this.user);
    });

    this.form = this.formEditprofile.group({
      category:"",
      fullname:"",
      title:"",
      description:"",
      email:"",
      adress:"",
      city :"",
      phone:"",
      user_img:"",
      experience:""  
    })
  }
  submit(): void {
   console.log('editprofile user',this.user)
    this.http.put(`http://localhost:8000/editprofile/${this.user._id}`, this.form.getRawValue())
    .subscribe({
      next:Response => {
        console.log("Edited", Response);
        this.route.navigateByUrl('signin');
      },
      error:error   => console.log("error", error)
    });
    
  }
    

}
