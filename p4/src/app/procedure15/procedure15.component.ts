import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Procedure15Service } from '../procedure15.service';

@Component({
  selector: 'app-procedure15',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule],
  templateUrl: './procedure15.component.html',
  styleUrl: './procedure15.component.css'
})
export class Procedure15Component {
  p15Form = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    tag: new FormControl(0, [Validators.required]),
    barcode: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    morePackages: new FormControl(0, [Validators.required]),
    price: new FormControl(0, [Validators.required]),
  });

  constructor(private router: Router, private service: Procedure15Service) {}

  runProcedure15() {
    let id = this.p15Form.value.id;
    let tag = this.p15Form.value.tag;
    let barcode = this.p15Form.value.barcode;
    let morePackages = this.p15Form.value.morePackages;
    let price = this.p15Form.value.price;

    if (id != null && id.length <= 40 && id.length != 0 &&
      tag != null && barcode != null && barcode.length <= 40 && barcode.length != 0 &&
      morePackages != null && price != null) {
        this.callP15(id, tag, barcode, morePackages, price)
        this.router.navigate(['']);
      }

  }
  callP15(id: string, tag: number, barcode: string, morePackages: number, price: number) {
    return this.service.runP15(id, tag, barcode, morePackages, price).subscribe((response) => {console.log(response)});
  }

}
