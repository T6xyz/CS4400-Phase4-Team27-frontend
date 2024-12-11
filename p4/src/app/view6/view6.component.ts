import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { OnInit } from '@angular/core';
import { View6Service } from '../view6.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface View6 {
  id: string,
  longName: string,
  homeBase: string,
  manager: string | null,
  revenue: number,
  productsCarried: number,
  costCarried: number,
  weightCarried: number
}

@Component({
  selector: 'app-view6',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule, MatButton, MatTableModule],
  templateUrl: './view6.component.html',
  styleUrl: './view6.component.css'
})
export class View6Component implements OnInit {
  dataSource: View6[] = [];
  constructor(private router: Router, private service: View6Service) {}

  ngOnInit(): void {
    this.dataSource = []

    this.service.runV6().subscribe((res: View6[]) => {
      for (const obj of res) {
        const temp: View6 = {"id": obj.id, "longName": obj.longName,
          "homeBase": obj.homeBase, "manager": obj.manager, "revenue": obj.revenue,
          "productsCarried": obj.productsCarried, "costCarried": obj.costCarried,
          "weightCarried": obj.weightCarried
        }
        this.dataSource.push(temp);
      }
    });
  }
}
