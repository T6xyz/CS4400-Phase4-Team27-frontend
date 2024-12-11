import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { View4 } from './view4/view4.component';

@Injectable({
  providedIn: 'root'
})
export class View4Service {
  private URL = "http://localhost:8080/v4";
  constructor(private http: HttpClient) { }

  runV4() {
    return this.http.get<View4[]>(this.URL);
  }
}
