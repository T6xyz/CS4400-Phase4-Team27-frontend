import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Procedure1Service } from '../procedure1.service';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-procedure1',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule, MatButton],
  templateUrl: './procedure1.component.html',
  styleUrl: './procedure1.component.css'
})


export class Procedure1Component {
  p1Form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    firstName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    address: new FormControl('', [Validators.required, Validators.maxLength(5000)]),
    birthdate: new FormControl('', [Validators.required, Validators.maxLength(10)])
  });
 
  constructor(private router: Router, private service: Procedure1Service) {

  }

  runProcedure1() {
    let username = this.p1Form.value.username;
    let firstName = this.p1Form.value.firstName;
    let lastName = this.p1Form.value.lastName;
    let address = this.p1Form.value.address;
    let birthdate = this.p1Form.value.birthdate;

    if (username != null && username.length <= 40 &&
      firstName != null && firstName.length <= 100 &&
      lastName != null && lastName.length <= 100 &&
      address != null && address.length <= 500 &&
      birthdate != null && birthdate.length == 10) {
        this.callP1(username, firstName, lastName, address, birthdate)
        this.router.navigate(['']);
      }
  }
  callP1(username: string, firstName: string, lastName: string, address: string, birthdate: string) {
    return this.service.runP1(username, firstName, lastName, address, birthdate).subscribe((response) => {console.log(response)});
  }
}
