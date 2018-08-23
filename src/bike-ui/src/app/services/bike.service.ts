import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

let token = localStorage.getItem('access_token');
const httpOp = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const httpHeader = {headers: new HttpHeaders().set('Authorization', 'Bearer' + token)};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http:HttpClient) { }

  getBikes() {
    return this.http.get('/server/api/v1/bikes', httpHeader);
  }


  getBike(id: number){
    return this.http.get('/server/api/v1/bikes/' + id, httpHeader);
  }

  createBikeReg(bike){
    let body = JSON.stringify(bike);
    return this.http.post('/server/api/v1/bikes',body,httpOp)
  }

}
