import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private messageSource = new BehaviorSubject({
    category: "",
    city: "",
    connect: false,
    createdAt: "",
    email: "",
    password: "",
    phone: "",
    updatedAt: "",
    user_img: "",
    username: "",
    fullname: "",
    __v: 0,
    _id: "",
  });
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(user: any) {
    this.messageSource.next(user)
  }

}