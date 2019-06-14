import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyService } from './my.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  constructor(private router: Router, private serv: MyService) { }

  logout() {
    this.serv.showNav = false;
  }

  ngOnInit() {
    this.router.navigate(['']);
  }
}
