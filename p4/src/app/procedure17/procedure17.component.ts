import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Procedure17Service } from '../procedure17.service';

@Component({
  selector: 'app-procedure17',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule],
  templateUrl: './procedure17.component.html',
  styleUrl: './procedure17.component.css'
})
export class Procedure17Component {
  p17Form = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    tag: new FormControl(0, [Validators.required]),
    destination: new FormControl('', [Validators.required, Validators.maxLength(40)])
    
  });
  constructor(private router: Router, private service: Procedure17Service) {}

  runProcedure17() {
    let id = this.p17Form.value.id;
    let tag = this.p17Form.value.tag;
    let destination = this.p17Form.value.destination;
    if (id != null && id.length <= 400 &&
      tag != null && destination != null && destination.length <= 40) {
        this.callP17(id, tag, destination);
        this.router.navigate(['']);
      }
  }
  
  callP17(id: string, tag: number, desination: string) {
    return this.service.runP17(id, tag, desination).subscribe((response) => {console.log(response)});
  }
}
