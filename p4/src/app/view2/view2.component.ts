import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { OnInit } from '@angular/core';
import { View2Service } from '../view2.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface View2 {
  username: string,
  taxID: string,
  salary: number,
  hired: string,
  employeeExperience: number,
  licenseID: string,
  drivingExperience: number,
  managerStatus: string
}

@Component({
  selector: 'app-view2',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule, MatButton, MatTableModule],
  templateUrl: './view2.component.html',
  styleUrl: './view2.component.css'
})
export class View2Component implements OnInit {
  dataSource: View2[] = [];
  constructor(private router: Router, private service: View2Service) {}

  ngOnInit(): void {
    this.dataSource = []

    this.service.runV2().subscribe((res: View2[]) => {
      for (const obj of res) {
        const temp: View2 = {"username": obj.username, "taxID": obj.taxID, "salary": obj.salary,
          "hired": obj.hired, "employeeExperience": obj.employeeExperience, "licenseID": obj.licenseID,
          "drivingExperience": obj.drivingExperience, "managerStatus": obj.managerStatus
        }
        this.dataSource.push(temp);
      }
    });
  }
}
