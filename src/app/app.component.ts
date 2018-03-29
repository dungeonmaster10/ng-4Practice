import { Component, OnInit } from '@angular/core';
import {MyService} from './my.service';
import 'rxjs/add/operator/map';
import { Type } from "./type";
import { FormGroup,FormControl,Validators,FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  response:any;
  fName;
  fb:FormBuilder;
  location:Array<any>=[];
  result=false;
  frmGrp:FormGroup;
  
  constructor(private serv:MyService, fb:FormBuilder){
    this.frmGrp= fb.group({
      'uName':[null,Validators.compose([Validators.required])]
    });
  }
  show(){
    this.serv.getData().map(res=>res.json()).subscribe((data) => {
      this.response=data;
      this.fName=data[3].name;
      this.result=true;
      console.log(this.response);
      if(this.location.length!=10)
        {
      for(let i=0;i<this.response.length;i++)
      {
        this.location.push(this.response[i].address.geo);
      }
    }
    }
    
    );  
  }
  ngOnInit(){
   
  }
}
