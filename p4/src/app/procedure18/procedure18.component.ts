import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Procedure18Service } from '../procedure18.service';

@Component({
  selector: 'app-procedure18',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule],
  templateUrl: './procedure18.component.html',
  styleUrl: './procedure18.component.css'
})
export class Procedure18Component {
  p18Form = new FormGroup({
    longName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    id: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    tag: new FormControl(0, [Validators.required]),
    barcode: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    quantity: new FormControl(0, [Validators.required])
  });
  constructor(private router: Router, private service: Procedure18Service) {}

  runProcedure18() {
    let longName = this.p18Form.value.longName;
    let id = this.p18Form.value.id;
    let tag = this.p18Form.value.tag;
    let barcode = this.p18Form.value.barcode;
    let quantity = this.p18Form.value.quantity;

    if (longName != null && longName.length <= 100 && longName.length != 0 &&
      id != null && id.length <= 40 && id.length != 0 &&
      tag != null && barcode != null && barcode.length <= 100 && barcode.length != 0 &&
      quantity != null && quantity >= 0) {
        this.callP18(longName, id, tag, barcode, quantity);
        this.router.navigate(['']);
      }
  }
  callP18(longName: string, id: string, tag: number, barcode: string, quantity: number) {
    return this.service.runP18(longName, id, tag, barcode, quantity).subscribe((response) => {console.log(response)});
  }

}
