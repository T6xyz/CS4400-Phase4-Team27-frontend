import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { OnInit } from '@angular/core';
import { View3Service } from '../view3.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface View3 {
  username: string, 
  licenseID: string,
  driverExperience: number,
  numVan: number
}

@Component({
  selector: 'app-view3',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule, MatButton, MatTableModule],
  templateUrl: './view3.component.html',
  styleUrl: './view3.component.css'
})
export class View3Component implements OnInit {
  dataSource: View3[] = [];
  constructor(private router: Router, private service: View3Service) {}

  ngOnInit(): void {
    this.dataSource = []

    this.service.runV3().subscribe((res: View3[]) => {
      for (const obj of res) {
        const temp: View3 = {"username": obj.username, "licenseID": obj.licenseID,
          "driverExperience": obj.driverExperience, "numVan": obj.numVan
        }
        this.dataSource.push(temp);
      }
    });
  }
}
