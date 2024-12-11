import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Procedure14Service } from '../procedure14.service';

@Component({
  selector: 'app-procedure14',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule],
  templateUrl: './procedure14.component.html',
  styleUrl: './procedure14.component.css'
})
export class Procedure14Component {
  p14Form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    id: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    tag: new FormControl(0, [Validators.required]),
  });
  constructor(private router: Router, private service: Procedure14Service) {}

  runProcedure14() {
    let username = this.p14Form.value.username;
    let id = this.p14Form.value.id;
    let tag = this.p14Form.value.tag;
    if (username != null && username.length <= 100 && username.length != 0 &&
      id != null && id.length <= 40 && id.length != 0 &&
      tag != null) {
        this.callP14(username, id, tag);
        this.router.navigate(['']);
      }
  }
  callP14(username: string, id: string, tag: number) {
    return this.service.runP14(username, id, tag).subscribe((response) => {console.log(response)});
  }
}
