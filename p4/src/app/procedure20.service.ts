import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Procedure20Service {
  private URL = "http://localhost:8080/p20";
  constructor(private http: HttpClient) { }

  runP20(id: string, tag: number) {
    const params = {
      id: id,
      tag: tag
    }
    const temp = new HttpParams({fromObject: params})
    return this.http.get(this.URL, {params: temp})
  }
}
