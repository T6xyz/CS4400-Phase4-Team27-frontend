import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Procedure2Service {
  private URL = "http://localhost:8080/p2";

  constructor(private http: HttpClient) { }

  runP2(username: string, firstName: string, lastName: string, address: string, 
    birthdate: string, taxID: string, hired: string, experience: number, salary: number) {
      const params = {
        username: username,
        firstName: firstName,
        lastName: lastName,
        address: address,
        birthdate: birthdate,
        taxID: taxID,
        hired: hired,
        experience: experience,
        salary: salary
      }
      const temp = new HttpParams({fromObject: params})
      return this.http.get(this.URL, {params: temp})
    }
}
