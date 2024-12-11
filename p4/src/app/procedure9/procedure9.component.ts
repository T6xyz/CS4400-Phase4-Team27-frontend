import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Procedure9Service } from '../procedure9.service';

@Component({
  selector: 'app-procedure9',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule],
  templateUrl: './procedure9.component.html',
  styleUrl: './procedure9.component.css'
})
export class Procedure9Component {
  p9Form = new FormGroup({
    label: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    x: new FormControl(0, [Validators.required]),
    y: new FormControl(0, [Validators.required]),
    space: new FormControl(2147483647)
  });
  constructor(private router: Router, private service: Procedure9Service) {}

  runProcedure9() {
    let label = this.p9Form.value.label;
    let x = this.p9Form.value.x;
    let y = this.p9Form.value.y;
    let space: any = this.p9Form.value.space;


    if (label != null && label.length <= 40 && label.length != 0
      && x != null && y != null && space != null) {
        let input: number = 0;
        if (space == null || space == undefined) {
          input = 2147483647; 
        } else {
          input = space;
        }
          this.callP9(label, x, y, input);
          this.router.navigate(['']);
        
    }
  }
  callP9(label: string, x: number, y: number, space: number) {
    console.log(space);
    return this.service.runP9(label, x, y, space).subscribe((response) => {console.log(response)});
  }
}
