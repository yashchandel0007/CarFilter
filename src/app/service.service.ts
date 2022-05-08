import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url = "https://myfakeapi.com/api/cars/"
  getCarData(){
    return this.http.get(this.url);
  }
}
