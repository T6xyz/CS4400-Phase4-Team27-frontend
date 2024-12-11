import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Procedure9Service {
  private URL = "http://localhost:8080/p9";
  constructor(private http: HttpClient) { }

  runP9(label: string, x: number, y: number, space: number) {
    const params = {
      label: label,
      x: x,
      y: y,
      space: space
    }
    const temp = new HttpParams({fromObject: params})
    
    return this.http.get(this.URL, {params: temp})
  }
}
