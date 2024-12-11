import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Procedure8Service {
  private URL = "http://localhost:8080/p8";
  constructor(private http: HttpClient) { }
  
  runP8(id: string, longName: string, homeBase: string, manager: string) {
    const params = {
      id: id,
      longName: longName,
      homeBase: homeBase,
      manager: manager
    }
    const temp = new HttpParams({fromObject: params})
    return this.http.get(this.URL, {params: temp})
  }
}
