import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Procedure21Service } from '../procedure21.service';

@Component({
  selector: 'app-procedure21',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule],
  templateUrl: './procedure21.component.html',
  styleUrl: './procedure21.component.css'
})
export class Procedure21Component {
  p21Form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(40)]),
  });
  constructor(private router: Router, private service: Procedure21Service) {}

  runProcedure21() {
    let username = this.p21Form.value.username;
    if (username != null && username.length <= 40) {
      this.callP21(username);
      this.router.navigate(['']);
    }
  }
  callP21(username: string) {
    return this.service.runP21(username).subscribe((response) => {console.log(response)});
  }
}
