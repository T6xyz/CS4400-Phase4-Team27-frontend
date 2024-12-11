import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Procedure1Service {

  private URL = "http://localhost:8080/p1"
  constructor(private http: HttpClient) { 

  }
  // postData(w: Workers) {
  //   let temp = new HttpParams();
  //   temp = temp.set("username", w.username);


  //   return this.http.get(this.URL, {
  //     params: temp
  //   });
  // }
  runP1(username: string, firstName: string, lastName: string, address: string, birthdate: string) {
    const params = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      address: address,
      birthdate: birthdate
    }
    const temp = new HttpParams({fromObject: params})
    return this.http.get(this.URL, {params: temp})
  }
}
