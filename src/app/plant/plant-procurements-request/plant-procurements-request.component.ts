import { Component, OnInit } from '@angular/core';
import {
  PlantEntry, PlantInventoryEntry, PlantOrderRequest, ProductionSiteEntry, Query, RentalPeriodEntry,
  SiteEngineerEntry, WorksEngineerEntry
} from '../definitions';
import {PlantService} from '../plant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plant-procurements-request',
  templateUrl: './plant-procurements-request.component.html',
  providers: [PlantService],
  styleUrls: ['./plant-procurements-request.component.css']
})
export class PlantProcurementsRequestComponent implements OnInit {

  id: number;
  query = new PlantOrderRequest();
  plantEntry = new PlantEntry();
  rentalPeriod = new RentalPeriodEntry();
  siteEngineerEntry = new SiteEngineerEntry();
  worksEngineerEntry = new WorksEngineerEntry();
  productionSiteEntry = new ProductionSiteEntry();




  private sub: any;
  constructor(private PlantServiceClass: PlantService,private route: ActivatedRoute) {}

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.plantEntry.plant_id = +params['id'];
      this.PlantServiceClass.plantdetail(this.id);
    });

  }

  executeQuery() {
    this.query.entry = this.plantEntry;
    this.query.rentalPeriod = this.rentalPeriod;
    this.query.siteEngineer = this.siteEngineerEntry;
    this.query.worksEngineer = this.worksEngineerEntry;
    this.query.productionSite = this.productionSiteEntry;
    console.log(this.query);
    this.PlantServiceClass.plant_hire_request(this.query);
  }

}
