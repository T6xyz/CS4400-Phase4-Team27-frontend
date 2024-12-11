import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { OnInit } from '@angular/core';
import { View1Service } from '../view1.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { NgFor } from '@angular/common';




export interface View1 {
  username: string,
  firstName: string, 
  lastName: string,
  address: string,
  numBusinesses: number,
  numPlaces: number,
  highs: number,
  lows: number,
  debt: number
}

@Component({
  selector: 'app-view1',
  imports: [ReactiveFormsModule, CommonModule, NgIf, MatFormField, MatLabel, MatError, MatFormFieldModule, MatInputModule, MatButton, MatTableModule],
  templateUrl: './view1.component.html',
  styleUrl: './view1.component.css'
})
export class View1Component implements OnInit {
  dataSource: View1[] = [];
  loading: boolean = true;
  constructor(private router: Router, private service: View1Service) {}

  ngOnInit(): void {
    this.dataSource = []
    this.loading = true;

    this.service.runV1().subscribe((res: View1[]) => {
      this.loading = false;
      for (const obj of res) {
        const temp: View1 = {"username": obj.username, "firstName": obj.firstName,
          "lastName": obj.lastName, "address": obj.address, "numBusinesses": obj.numBusinesses,
          "numPlaces": obj.numPlaces, "highs": obj.highs, "lows": obj.lows, "debt": obj.debt
        }
        this.dataSource.push(temp);
      }
    });
    
  }  
}
