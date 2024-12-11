import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { OnInit } from '@angular/core';
import { View5Service } from '../view5.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface View5 {
  productName: string, 
  location: string,
  amountAvailable: number,
  lowPrice: number,
  highPrice: number
}

@Component({
  selector: 'app-view5',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule, MatButton, MatTableModule],
  templateUrl: './view5.component.html',
  styleUrl: './view5.component.css'
})
export class View5Component implements OnInit {
  dataSource: View5[] = [];
  constructor(private router: Router, private service: View5Service) {}

  ngOnInit(): void {
    this.dataSource = []

    this.service.runV5().subscribe((res: View5[]) => {
      for (const obj of res) {
        const temp: View5 = {"productName": obj.productName, "location": obj.location,
          "amountAvailable": obj.amountAvailable, "lowPrice": obj.lowPrice, "highPrice": obj.highPrice
        }
        this.dataSource.push(temp);
      }
    });
  }

}
