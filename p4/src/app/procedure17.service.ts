import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Procedure17Service {
  private URL = "http://localhost:8080/p17";
  constructor(private http: HttpClient) { }

  runP17(id: string, tag: number, destination: string) {
    const params = {
      id: id,
      tag: tag,
      destination: destination
    }
    const temp = new HttpParams({fromObject: params})
    return this.http.get(this.URL, {params: temp})
  }
}
