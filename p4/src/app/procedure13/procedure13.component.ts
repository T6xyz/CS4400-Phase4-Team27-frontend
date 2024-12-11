import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Procedure13Service } from '../procedure13.service';

@Component({
  selector: 'app-procedure13',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule],
  templateUrl: './procedure13.component.html',
  styleUrl: './procedure13.component.css'
})
export class Procedure13Component {
  p13Form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    id: new FormControl('', [Validators.required, Validators.maxLength(40)]),
  });
  constructor(private router: Router, private service: Procedure13Service) {}

  runProcedure13() {
    let username = this.p13Form.value.username;
    let id = this.p13Form.value.id;
    if (username != null && username.length <= 40 &&
      id != null && id.length <= 40) {
        this.callP13(username, id);
        this.router.navigate(['']);
      }
  }

  callP13(username: string, id: string) {
    return this.service.runP13(username, id).subscribe((response) => {console.log(response)});
  }
}
