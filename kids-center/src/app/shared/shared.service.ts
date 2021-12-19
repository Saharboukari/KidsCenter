import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  user:any
  event:any
  
  constructor(private http:HttpClient) { }
  setuser(data:any){
    this.user=data
  }
  getuser(){
    return this.user
  }
  setevent(data:any){
    this.event=data
  }
  getevent(){
    return this.event
  }
  
    
  
}
