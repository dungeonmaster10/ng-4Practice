import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { MyService } from "./my.service";

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule 
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
