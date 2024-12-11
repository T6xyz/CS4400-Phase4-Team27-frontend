import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Procedure6Service } from '../procedure6.service';

@Component({
  selector: 'app-procedure6',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule],
  templateUrl: './procedure6.component.html',
  styleUrl: './procedure6.component.css'
})
export class Procedure6Component {
  p6Form = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    tag: new FormControl(0, [Validators.required]),
    fuel: new FormControl(0, [Validators.required]),
    capacity: new FormControl(0, [Validators.required]),
    sales: new FormControl(0, [Validators.required]),
    drivenBy: new FormControl('', [Validators.required, Validators.maxLength(40)]),
  });
  constructor(private router: Router, private service: Procedure6Service) {}

  runProcedure6() {
    let id = this.p6Form.value.id
    let tag = this.p6Form.value.tag
    let fuel = this.p6Form.value.fuel
    let capacity = this.p6Form.value.capacity
    let sales = this.p6Form.value.sales
    let drivenBy = this.p6Form.value.drivenBy;

    if (id != null && id.length <= 40 &&
      tag != null &&
      fuel != null &&
      capacity != null &&
      sales != null && 
      drivenBy != null && drivenBy.length <= 40) {
        this.callP6(id, tag, fuel, capacity, sales, drivenBy);
        this.router.navigate(['']);
      }


  }
  callP6(id: string, tag: number, fuel: number, capacity: number, sales: number, barcode: string) {
    return this.service.runP6(id, tag, fuel, capacity, sales, barcode).subscribe((response) => {console.log(response)});
  }
}
