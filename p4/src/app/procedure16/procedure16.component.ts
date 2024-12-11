import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Procedure16Service } from '../procedure16.service';


@Component({
  selector: 'app-procedure16',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule],
  templateUrl: './procedure16.component.html',
  styleUrl: './procedure16.component.css'
})
export class Procedure16Component {
  p16Form = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    tag: new FormControl(0, [Validators.required]),
    moreFuel: new FormControl(0, [Validators.required])
  });
  constructor(private router: Router, private service: Procedure16Service) {}

  runProcedure16() {
    let id = this.p16Form.value.id;
    let tag = this.p16Form.value.tag;
    let moreFuel = this.p16Form.value.moreFuel;

    if (id != null && id.length <= 40 &&
      tag != null && moreFuel != null) {
        this.callP16(id, tag, moreFuel);
        this.router.navigate(['']);
      }
  }

  callP16(id: string, tag: number, moreFuel: number) {
    return this.service.runP16(id, tag, moreFuel).subscribe((response) => {console.log(response)});
  }
}
