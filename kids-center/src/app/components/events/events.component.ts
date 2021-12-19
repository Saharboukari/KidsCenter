import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AnyArray } from 'mongoose';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  posts:any=[]
  user:any
  
  constructor(private shared :SharedService ,
    private http :HttpClient,
    private route :Router) { }

  ngOnInit(): void {
    
    this.user=this.shared.getuser()
    console.log(this.user)
    this.http.get('http://localhost:8000/events')
    
    .subscribe({
      next:Response => {
        console.log("response",Response);
        this.posts=Response
        console.log("here",this.posts);
    },
      error:error   => console.log("error", error)
    });
  }
 
    
  addPost(){
    this.route.navigateByUrl('/addEvent');
    
  }
  comments(post:any){
    this.shared.setevent(post)
    this.route.navigateByUrl('/comments')
  }
  
  states:string[]=[
    "Tunis","Ariana","Ben arous","Manouba","Sousse","Sfax","Gabes",
  "Médenine","Mahdia","Béja","Bizerte","Gafsa","Jendouba","Kairouan","Kasserine","Kef",
  "Monastir","Nabeul","Sidi Bouzid","Siliana","Tataouine","Tozeur","Zaghouan","Kébili"
  ]


  
  selectedValue:string
  selectedstate:string
  
  onfilter(){
    console.log(this.user)
    this.selectedstate=this.selectedValue
  }

}
