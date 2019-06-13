import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpModule} from '@angular/http';
import { MyService } from './my.service';
import { AppRoutingModule } from './app-routing.module';
import { Comp1Component } from './comp1/comp1.component';
import { Comp0Component } from './comp0/comp0.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp0Component,
    PieChartComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    MatNativeDateModule,
    HttpModule,
    ReactiveFormsModule ,
    AppRoutingModule,
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
