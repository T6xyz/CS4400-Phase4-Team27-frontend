import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Procedure2Service } from '../procedure2.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-procedure2',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule, MatButton],
  templateUrl: './procedure2.component.html',
  styleUrl: './procedure2.component.css'
})
export class Procedure2Component {
  p2Form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    firstName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    address: new FormControl('', [Validators.required, Validators.maxLength(5000)]),
    birthdate: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    taxID: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    hired: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    experience: new FormControl(0, [Validators.required]),
    salary: new FormControl(0, [Validators.required])
  });
  constructor (private router: Router, private service: Procedure2Service) {

  }
  runProcedure2() {
    let username = this.p2Form.value.username;
    let firstName = this.p2Form.value.firstName;
    let lastName = this.p2Form.value.lastName;
    let address = this.p2Form.value.address;
    let birthdate = this.p2Form.value.birthdate;
    let taxID = this.p2Form.value.taxID;
    let hired = this.p2Form.value.hired;
    let experience = this.p2Form.value.experience
    let salary = this.p2Form.value.salary;

    if (username != null && username.length <= 40 &&
      firstName != null && firstName.length <= 100 &&
      lastName != null && lastName.length <= 100 &&
      address != null && address.length <= 5000 && 
      birthdate != null && birthdate.length == 10 &&
      taxID != null && taxID.length <= 40 &&
      hired != null && hired.length == 10 &&
      experience != null && salary != null) {
        this.callP2(username, firstName, lastName, address, birthdate, taxID, hired, experience, salary)
        this.router.navigate(['']);
      }
  }
  callP2(username: string, firstName: string, lastName: string, 
    address: string, birthdate: string, taxID: string, hired: string, experience: number, salary: number) {
      return this.service.runP2(username, firstName, lastName, address, birthdate, taxID, hired, experience, salary).subscribe((response) => {console.log(response)});
  }

}
