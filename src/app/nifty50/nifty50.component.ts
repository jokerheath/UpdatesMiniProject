import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-nifty50',
  templateUrl: './nifty50.component.html',
  styleUrls: ['./nifty50.component.css']
})
export class Nifty50Component implements OnInit {
  //totalAngularPackages: any
  totalAngularPackages : any[] = [];
  p: number = 1;

  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  constructor(private http: HttpClient) {  
    
    const Url = 'https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%2050';
    const url = "https://cors-anywhere.herokuapp.com/https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%2050";


    this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
        this.totalAngularPackages = data;
        
    });
  }

  ngOnInit() {

     
  }

}
