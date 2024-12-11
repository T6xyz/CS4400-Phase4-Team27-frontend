import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Procedure19Service } from '../procedure19.service';

@Component({
  selector: 'app-procedure19',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule],
  templateUrl: './procedure19.component.html',
  styleUrl: './procedure19.component.css'
})
export class Procedure19Component {
  p19Form = new FormGroup({
    barcode: new FormControl('', [Validators.required, Validators.maxLength(40)])
  });
  constructor(private router: Router, private service: Procedure19Service) {}

  runProcedure19() {
    let barcode = this.p19Form.value.barcode;
    if (barcode != null && barcode.length <= 40) {
      this.callP19(barcode);
      this.router.navigate(['']);
    }
  }

  callP19(barcode: string) {
    return this.service.runP19(barcode).subscribe((response) => {console.log(response)});
  }
}
