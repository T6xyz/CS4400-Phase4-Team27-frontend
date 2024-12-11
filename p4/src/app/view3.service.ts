import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { View3 } from './view3/view3.component';

@Injectable({
  providedIn: 'root'
})
export class View3Service {
  private URL = "http://localhost:8080/v3";
  constructor(private http: HttpClient) { }

  runV3() {
    return this.http.get<View3[]>(this.URL);
  }
}
