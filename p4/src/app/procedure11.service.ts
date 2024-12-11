import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Procedure11Service {
  private URL = "http://localhost:8080/p11";
  constructor(private http: HttpClient) { }

  runP11(username: string, id: string) {
    const params = {
      username: username,
      id: id
    }
    const temp = new HttpParams({fromObject: params})
    return this.http.get(this.URL, {params: temp})
  }
}
