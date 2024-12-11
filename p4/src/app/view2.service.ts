import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { View2 } from './view2/view2.component';

@Injectable({
  providedIn: 'root'
})
export class View2Service {
  private URL = "http://localhost:8080/v2";
  constructor(private http: HttpClient) { }

  runV2() {
    return this.http.get<View2[]>(this.URL);
  }
}
