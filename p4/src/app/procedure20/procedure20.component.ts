import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Procedure20Service } from '../procedure20.service';

@Component({
  selector: 'app-procedure20',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule],
  templateUrl: './procedure20.component.html',
  styleUrl: './procedure20.component.css'
})
export class Procedure20Component {
  p20Form = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    tag: new FormControl(0, [Validators.required]),
  });
  constructor(private router: Router, private service: Procedure20Service) {}

  runProcedure20() {
    let id = this.p20Form.value.id;
    let tag = this.p20Form.value.tag;
    if (id != null && id.length <= 40 &&
      tag != null) {
        this.callP20(id, tag);
        this.router.navigate(['']);
      }
  }
  callP20(id: string, tag: number) {
    return this.service.runP20(id, tag).subscribe((response) => {console.log(response)});
  }
}
