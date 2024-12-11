import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Procedure8Service } from '../procedure8.service';

@Component({
  selector: 'app-procedure8',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule],
  templateUrl: './procedure8.component.html',
  styleUrl: './procedure8.component.css'
})
export class Procedure8Component {
  p8Form = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    longName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    homeBase: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    manager: new FormControl('', [Validators.required, Validators.maxLength(40)]),
  });
  constructor(private router: Router, private service: Procedure8Service) {}
  
  runProcedure8() {
    let id = this.p8Form.value.id;
    let longName = this.p8Form.value.longName;
    let homeBase = this.p8Form.value.homeBase;
    let manager = this.p8Form.value.manager;

    if (id != null && id.length <= 40 &&
      longName != null && longName.length <= 100 &&
      homeBase != null && homeBase.length <= 40 &&
      manager != null && manager.length <= 40) {
        this.callP8(id, longName, homeBase, manager);
        this.router.navigate(['']);
      }

  }
  callP8(id: string, longName: string, homeBase: string, manager: string) {
    return this.service.runP8(id, longName, homeBase, manager).subscribe((response) => {console.log(response)});
  }
}
