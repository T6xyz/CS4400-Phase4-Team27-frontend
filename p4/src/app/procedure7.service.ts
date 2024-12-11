import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Procedure7Service {
  private URL = "http://localhost:8080/p7";
  constructor(private http: HttpClient) { }

  runP7(longName: string, rating: number, spent: number, location: string) {
    const params = {
      longName: longName,
      rating: rating,
      spent: spent,
      location: location
    }
    const temp = new HttpParams({fromObject: params})
    return this.http.get(this.URL, {params: temp})
  }
}
