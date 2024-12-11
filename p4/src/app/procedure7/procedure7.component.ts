import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Procedure7Service } from '../procedure7.service';

@Component({
  selector: 'app-procedure7',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule],
  templateUrl: './procedure7.component.html',
  styleUrl: './procedure7.component.css'
})
export class Procedure7Component {
  p7Form = new FormGroup({
    longName: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    rating: new FormControl(0, [Validators.required]),
    spent: new FormControl(0, [Validators.required]),
    location: new FormControl('', [Validators.required, Validators.maxLength(40)])
  });
  constructor(private router: Router, private service: Procedure7Service) {}

  runProcedure7() {
    let longName = this.p7Form.value.longName;
    let rating = this.p7Form.value.rating;
    let spent = this.p7Form.value.spent;
    let location = this.p7Form.value.location;

    if (longName != null && longName.length <= 40 &&
      rating != null && spent != null &&
      location != null && location.length <= 40) {
        this.callP7(longName, rating, spent, location);
        this.router.navigate(['']);
      }
  }
  callP7(longName: string, rating: number, spent: number, location: string) {
    return this.service.runP7(longName, rating, spent, location).subscribe((response) => {console.log(response)});
  }
}
