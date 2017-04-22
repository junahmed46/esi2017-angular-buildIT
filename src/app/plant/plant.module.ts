import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlantRoutingModule } from './plant-routing.module';
import { PlantHireRequestComponent } from './plant-hire-request/plant-hire-request.component';
import { PlantHireRequestResultComponent } from './plant-hire-request-result/plant-hire-request-result.component';
import { PlantdetailComponent } from './plantdetail/plantdetail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PlantRoutingModule
  ],
  declarations: [PlantHireRequestComponent, PlantHireRequestResultComponent, PlantdetailComponent]
})
export class PlantModule { }


