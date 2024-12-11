import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Procedure14Service {
  private URL = "http://localhost:8080/p14";
  constructor(private http: HttpClient) { }

  runP14(username: string, id: string, tag: number) {
    const params = {
      username: username,
      id: id,
      tag: tag,
    }
    const temp = new HttpParams({fromObject: params})
    return this.http.get(this.URL, {params: temp})
  }
}
