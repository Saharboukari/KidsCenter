import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  user: any;
  subscription: Subscription;
  provider: any;
  isProvider: boolean;

  constructor(
    private http: HttpClient,
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe((message: any) => {
      this.user = message;
      console.log("profile component ", this.user);
    });

    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      console.log(`${id}`);
      this.http.get(`http://localhost:8000/user/${id}`)
        .subscribe({
          next: Response => {
            this.provider = Response;
            console.log("user profile with id: ", this.provider);
          },
          error: error => console.log("error profile id: ", error)
        });
    });

    this.isProvider = this.userId();
  }

  userId() {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      console.log(`${id}`);
      return id ? true : false;
    });
    return false;
  }

}
