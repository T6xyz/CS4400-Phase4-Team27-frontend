import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Procedure5Service {
  private URL = "http://localhost:8080/p5";
  constructor(private http: HttpClient) { }

  runP5(barcode: string, name: string, weight: number) {
    const params = {
      barcode: barcode,
      name: name,
      weight: weight
    }
    const temp = new HttpParams({fromObject: params})
    return this.http.get(this.URL, {params: temp})
  }
}
