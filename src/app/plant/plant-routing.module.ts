import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlantHireRequestComponent} from './plant-hire-request/plant-hire-request.component';
import {PlantdetailComponent} from './plantdetail/plantdetail.component';
import {PlantProcurementsRequestComponent} from './plant-procurements-request/plant-procurements-request.component';
import {ProcurementsRequestsDetailComponent} from './procurements-requests-detail/procurements-requests-detail.component';

const routes: Routes = [
  { path : 'plant-hire-request', component: PlantHireRequestComponent},
  { path : 'procurements/plants/:id', component: PlantdetailComponent},
  { path : 'procurements/requests/:id', component: PlantProcurementsRequestComponent},
  { path : 'procurements/requests/detail/:id', component: ProcurementsRequestsDetailComponent},




  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantRoutingModule { }
