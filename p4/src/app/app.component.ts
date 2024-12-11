import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Procedure1Service } from './procedure1.service';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'p4';

  constructor(private service : Procedure1Service) {
  }

  ngOnInit(): void {
  }

  // submit() {
  //   let t: Workers = {
  //     username: "josiah"
  //   }
  //   return this.service.postData(t).subscribe((response) => {console.log(response)});
  // }
}
