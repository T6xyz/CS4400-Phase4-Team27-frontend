import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { OnInit } from '@angular/core';
import { View4Service } from '../view4.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface View4 {
  label: string,
  resolvedLongName: string,
  x: number,
  y: number,
  space: number | null,
  numVans: number,
  vanIDs: string,
  remainingCapacity: number;
}

@Component({
  selector: 'app-view4',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule, MatButton, MatTableModule],
  templateUrl: './view4.component.html',
  styleUrl: './view4.component.css'
})
export class View4Component implements OnInit {
  dataSource: View4[] = [];
  constructor(private router: Router, private service: View4Service) {}
  
  ngOnInit(): void {
    this.dataSource = []

    this.service.runV4().subscribe((res: View4[]) => {
      for (const obj of res) {
        const temp: View4 = {"label": obj.label, "resolvedLongName": obj.resolvedLongName, "x": obj.x,
          "y": obj.y, "space": obj.space, "numVans": obj.numVans, "vanIDs": obj.vanIDs,
          "remainingCapacity": obj.remainingCapacity
        }
        this.dataSource.push(temp);
      }
    });
  }

}
