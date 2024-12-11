import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Procedure19Service {
  private URL = "http://localhost:8080/p19";
  constructor(private http: HttpClient) { }

  runP19(barcode: string) {
    const params = {
      barcode: barcode
    }
    const temp = new HttpParams({fromObject: params})
    return this.http.get(this.URL, {params: temp})
  }
}
