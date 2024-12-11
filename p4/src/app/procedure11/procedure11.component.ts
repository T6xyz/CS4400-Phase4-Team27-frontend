import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Procedure11Service } from '../procedure11.service';

@Component({
  selector: 'app-procedure11',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule],
  templateUrl: './procedure11.component.html',
  styleUrl: './procedure11.component.css'
})
export class Procedure11Component {
  p11Form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    id: new FormControl('', [Validators.required, Validators.maxLength(40)]),
  });
  constructor(private router: Router, private service: Procedure11Service) {}

  runProcedure11() {
    let username = this.p11Form.value.username;
    let id = this.p11Form.value.id;
    if (username != null && username.length <= 40 &&
      id != null && id.length <= 40) {
        this.callP11(username, id);
        this.router.navigate(['']);
      }
  }

  callP11(username: string, id: string) {
    return this.service.runP11(username, id).subscribe((response) => {console.log(response)});
  }
}
