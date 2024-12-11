import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Procedure5Service } from '../procedure5.service';

@Component({
  selector: 'app-procedure5',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule],
  templateUrl: './procedure5.component.html',
  styleUrl: './procedure5.component.css'
})
export class Procedure5Component {
  p5Form = new FormGroup({
    barcode: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    weight: new FormControl(0, [Validators.required]),
  });
  constructor(private router: Router, private service: Procedure5Service) {}

  runProcedure5() {
    let barcode = this.p5Form.value.barcode;
    let name = this.p5Form.value.name;
    let weight = this.p5Form.value.weight;
    if (barcode != null && barcode.length <= 40 && barcode.length != 0 &&
      name != null && name.length <= 100 && name.length != 0 &&
      weight != null) {
        this.callP5(barcode, name, weight);
        this.router.navigate(['']);
      }
  }
  callP5(barcode: string, name: string, weight: number) {
    return this.service.runP5(barcode, name, weight).subscribe((response) => {console.log(response)});
  }
}
