import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { View1 } from './view1/view1.component';

@Injectable({
  providedIn: 'root'
})
export class View1Service {
  private URL = "http://localhost:8080/v1";
  constructor(private http: HttpClient) { }

  runV1() {
    return this.http.get<View1[]>(this.URL);
  }
}
