import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Procedure4Service } from '../procedure4.service';

@Component({
  selector: 'app-procedure4',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule],
  templateUrl: './procedure4.component.html',
  styleUrl: './procedure4.component.css'
})
export class Procedure4Component {
  p4Form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(40)]),
  });

  constructor(private router: Router, private service: Procedure4Service) {}

  runProcedure4() {
    let username = this.p4Form.value.username;
    if (username != null && username.length <= 40) {
      this.callP4(username)
      this.router.navigate(['']);
    }
  }
  callP4(username: string) {
    return this.service.runP4(username).subscribe((response) => {console.log(response)});
  }

}
