import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'test',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultService implements OnInit {
    private _url: string = "/"
  constructor(private http: HttpClient) { 
 
  }

  ngOnInit(): void {
    
  }
  fetchData(){
    
  }

}
