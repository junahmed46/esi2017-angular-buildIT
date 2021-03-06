import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PlantModule} from './plant/plant.module';
import { ReactiveFormsModule } from '@angular/forms';
import {PlantService} from './plant/plant.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PlantModule,
    ReactiveFormsModule
  ],
  providers: [PlantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
