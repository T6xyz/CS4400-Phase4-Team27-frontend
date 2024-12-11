import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { View5 } from './view5/view5.component';

@Injectable({
  providedIn: 'root'
})
export class View5Service {
  private URL = "http://localhost:8080/v5";
  constructor(private http: HttpClient) { }

  runV5() {
    return this.http.get<View5[]>(this.URL);
  }
}
