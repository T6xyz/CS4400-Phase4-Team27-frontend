import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Procedure4Service {
  private URL = "http://localhost:8080/p4";
  constructor(private http: HttpClient) { }

  runP4(username: string) {
    const params = {
      username: username
    }
    const temp = new HttpParams({fromObject: params})
    return this.http.get(this.URL, {params: temp})
  }
}
