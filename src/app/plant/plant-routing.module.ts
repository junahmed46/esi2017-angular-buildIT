import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlantHireRequestComponent} from './plant-hire-request/plant-hire-request.component';
import {PlantdetailComponent} from './plantdetail/plantdetail.component';

const routes: Routes = [
  { path : 'plant-hire-request', component: PlantHireRequestComponent},
  { path : 'procurements/plants/:id', component: PlantdetailComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantRoutingModule { }
