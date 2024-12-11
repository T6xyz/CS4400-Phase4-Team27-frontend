import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Procedure13Service {
  private URL = "http://localhost:8080/p13";
  constructor(private http: HttpClient) { }

  runP13(username: string, id: string) {
    const params = {
      username: username,
      id: id
    }
    const temp = new HttpParams({fromObject: params})
    return this.http.get(this.URL, {params: temp})
  }
}
