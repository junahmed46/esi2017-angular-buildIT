import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlantHireRequestComponent} from './plant-hire-request/plant-hire-request.component';

const routes: Routes = [
  { path : 'plant-hire-request', component: PlantHireRequestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantRoutingModule { }
