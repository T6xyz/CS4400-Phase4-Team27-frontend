import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Procedure21Service {
  private URL = "http://localhost:8080/p21";
  constructor(private http: HttpClient) { }

  runP21(username: string) {
    const params = {
      username: username
    }
    const temp = new HttpParams({fromObject: params})
    return this.http.get(this.URL, {params: temp})
  }
}
