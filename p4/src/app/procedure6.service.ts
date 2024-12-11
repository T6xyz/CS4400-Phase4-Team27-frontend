import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Procedure6Service {
  private URL = "http://localhost:8080/p6";
  constructor(private http: HttpClient) { }

  runP6(id: string, tag: number, fuel: number, capacity: number, sales: number, barcode: string) {
    const params = {
      id: id,
      tag: tag,
      fuel: fuel,
      capacity: capacity,
      sales: sales,
      barcode: barcode
    }
    const temp = new HttpParams({fromObject: params})
    return this.http.get(this.URL, {params: temp})
  }
}
