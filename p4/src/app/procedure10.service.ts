import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Procedure10Service {
  private URL = "http://localhost:8080/p10";
  constructor(private http: HttpClient) { }

  runP10(owner: string, amount: number, longName: string, fundDate: string) {
    const params = {
      owner: owner,
      amount: amount,
      longName: longName, 
      fundDate: fundDate
    }
    const temp = new HttpParams({fromObject: params})
    return this.http.get(this.URL, {params: temp})
  }
}
