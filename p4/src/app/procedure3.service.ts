import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Procedure3Service {
  private URL = "http://localhost:8080/p3";
  constructor(private http: HttpClient) { }

  runP3(username: string, licenseID: string, licenseType: string, experience: number) {
    const params = {
      username: username,
      licenseID: licenseID,
      licenseType: licenseType,
      experience: experience
    }
    const temp = new HttpParams({fromObject: params})
    return this.http.get(this.URL, {params: temp})
  }
}
