import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Procedure15Service {
  private URL = "http://localhost:8080/p15";
  constructor(private http: HttpClient) { }

  runP15(id: string, tag: number, barcode: string, morePackages: number, price: number) {
    const params = {
      id: id,
      tag: tag,
      barcode: barcode,
      morePackages: morePackages,
      price: price
    }
    const temp = new HttpParams({fromObject: params})
    return this.http.get(this.URL, {params: temp})
  }
}
