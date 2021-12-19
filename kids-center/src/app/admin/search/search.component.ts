import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector   : 'search',
  templateUrl: './search.component.html',
  styleUrls  : ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form  : FormGroup;
  users : Array<Object>;
  data  : Object;
  result:any;
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient) {
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      city: "",
      fullname: "",
      specialty: ""
    });
    this.http.get('http://localhost:8000/services')
    .subscribe({
      next:Response => {
        console.log("response",Response);
        this.result=Response
        console.log("result",this.result);
    },
      error:error   => console.log("error", error)
    });
    
  }
 
  submit(): void {
    console.log(this.form.getRawValue());
    let params = this.form.getRawValue()
    // let params = new HttpParams().set("paramName",this.form.city).set("paramName2", paramValue2);
    this.http.get('http://localhost:8000/services',{params})
    .subscribe({
      next:Response => {
        console.log("response",Response);
        this.result=Response
        console.log("result",this.result);
    },
      error:error   => console.log("error", error)
    });
  }
  
  //   add():void {
//     this.http.post('http://localhost:8000/user', this.form.getRawValue())
// .subscribe({
//   next:Response => console.log("Al right", Response),
//   error:error   => console.log("error", error)
// });
//   }

}
// adresse: "tunis"
// category: "serviceProvider"
// city: "tunis"
// connect: false
// email: "jesser@gmail.com"
// fullname: "test"
// phone: "55"
// user_img: "https://www.propertycentral.co.ke/assets/images/profiles/default.jpg"
// username: "jess"
// _id: "61bcc0f5787a8ec6b952437f"