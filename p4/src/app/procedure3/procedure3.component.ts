import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Procedure3Service } from '../procedure3.service';

@Component({
  selector: 'app-procedure3',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule],
  templateUrl: './procedure3.component.html',
  styleUrl: './procedure3.component.css'
})
export class Procedure3Component {
  p3Form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    licenseID: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    licenseType: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    experience: new FormControl(0, [Validators.required]),
  });
  constructor(private router: Router, private service: Procedure3Service) {}
  
  runProcedure3() {
    let username = this.p3Form.value.username;
    let licenseID = this.p3Form.value.licenseID;
    let licenseType = this.p3Form.value.licenseType;
    let experience = this.p3Form.value.experience;
    if (username != null && username.length <= 40 &&
      licenseID != null && licenseID.length <= 40 &&
      licenseType != null && licenseType.length <= 100 &&
      experience != null) {
        this.callP3(username, licenseID, licenseType, experience)
        this.router.navigate(['']);
      }
  }
  callP3(username: string, licenseID: string, licenseType: string, experience: number) {
    return this.service.runP3(username, licenseID, licenseType, experience).subscribe((response) => {console.log(response)});
  }
}
