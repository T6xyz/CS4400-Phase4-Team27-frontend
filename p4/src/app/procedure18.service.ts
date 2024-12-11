import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Procedure18Service {
  private URL = "http://localhost:8080/p18";
  constructor(private http: HttpClient) { }

  runP18(longName: string, id: string, tag: number, barcode: string, quantity: number) {
    const params = {
      longName: longName,
      id: id,
      tag: tag, 
      barcode: barcode,
      quantity: quantity
    }
    const temp = new HttpParams({fromObject: params})
    return this.http.get(this.URL, {params: temp})
  }
}
