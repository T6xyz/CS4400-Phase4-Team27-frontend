import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Procedure16Service {
  private URL = "http://localhost:8080/p16";
  constructor(private http: HttpClient) { }

  runP16(id: string, tag: number, moreFuel: number) {
    const params = {
      id: id,
      tag: tag,
      moreFuel: moreFuel
    }
    const temp = new HttpParams({fromObject: params})
    return this.http.get(this.URL, {params: temp})
  }
}
