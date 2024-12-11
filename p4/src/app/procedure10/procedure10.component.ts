import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Procedure10Service } from '../procedure10.service';

@Component({
  selector: 'app-procedure10',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule],
  templateUrl: './procedure10.component.html',
  styleUrl: './procedure10.component.css'
})
export class Procedure10Component {
  p10Form = new FormGroup({
    owner: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    amount: new FormControl(0, [Validators.required]),
    longName: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    fundDate: new FormControl('', [Validators.required, Validators.maxLength(10)])
  });
  constructor(private router: Router, private service: Procedure10Service) {}

  runProcedure10() {
    let owner = this.p10Form.value.owner;
    let amount = this.p10Form.value.amount;
    let longName = this.p10Form.value.longName;
    let fundDate = this.p10Form.value.fundDate;

    if (owner != null && owner.length <= 40 &&
      amount != null && longName != null && longName.length <= 40 &&
      fundDate != null && fundDate.length == 10) {
        this.callP10(owner, amount, longName, fundDate);
        this.router.navigate(['']);
      }
  }
  callP10(owner: string, amount: number, longName: string, fundDate: string) {
    return this.service.runP10(owner, amount, longName, fundDate).subscribe((response) => {console.log(response)});
  }
}
