import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { View6 } from './view6/view6.component';

@Injectable({
  providedIn: 'root'
})
export class View6Service {
  private URL = "http://localhost:8080/v6";
  constructor(private http: HttpClient) { }

  runV6() {
    return this.http.get<View6[]>(this.URL);
  }
}
