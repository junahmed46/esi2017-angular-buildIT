import { Component, OnInit } from '@angular/core';
import {PlantService} from '../plant.service';
import {Query} from '../definitions';

@Component({

  selector: 'app-plant-hire-request-result',
  providers: [PlantService],
  templateUrl: './plant-hire-request-result.component.html',
  styleUrls: ['./plant-hire-request-result.component.css']

})
export class PlantHireRequestResultComponent implements OnInit {
  Query = new Query();
  constructor(private PlantServiceClass: PlantService) {}


  ngOnInit() {
  }

}
