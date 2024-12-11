import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Procedure12Service } from '../procedure12.service';

@Component({
  selector: 'app-procedure12',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule],
  templateUrl: './procedure12.component.html',
  styleUrl: './procedure12.component.css'
})
export class Procedure12Component {
  p12Form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    id: new FormControl('', [Validators.required, Validators.maxLength(40)]),
  });
  constructor(private router: Router, private service: Procedure12Service) {}

  runProcedure12() {
    let username = this.p12Form.value.username;
    let id = this.p12Form.value.id;
    if (username != null && username.length <= 40 &&
      id != null && id.length <= 40) {
        this.callP12(username, id);
        this.router.navigate(['']);
      }
  }

  callP12(username: string, id: string) {
    return this.service.runP12(username, id).subscribe((response) => {console.log(response)});
  }
}
