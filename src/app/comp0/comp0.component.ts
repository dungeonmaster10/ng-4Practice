import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';
import 'rxjs/add/operator/map';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-comp0',
  templateUrl: './comp0.component.html',
  styleUrls: ['./comp0.component.css']
})
export class Comp0Component implements OnInit {


  response: any;
  fName;
  fb: FormBuilder;
  location: Array<any> = [];
  result = false;
  frmGrp: FormGroup;
  c = 0;

  constructor(private serv: MyService, fb: FormBuilder) {
    this.frmGrp = fb.group({
      'uName': [null, Validators.compose([Validators.required])]
    });
  }
  show() {
    this.serv.getData().map(res => res.json()).subscribe((data) => {
      this.response = data;
      this.fName = data[3].name;
      this.result = true;
      console.log(this.response);
      if (this.location.length !== 10) {
        for (let i = 0; i < this.response.length; i++) {
          this.location.push(this.response[i].address.geo);
        }
      }
    }
    );
  }
  like(user: { like: boolean; }) {
    user.like = !user.like;
  }
  ngOnInit() {
  }

}
