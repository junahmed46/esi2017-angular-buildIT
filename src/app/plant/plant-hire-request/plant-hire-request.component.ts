import { Component, OnInit } from '@angular/core';
import {Query} from '../definitions';
import {PlantService} from '../plant.service';

@Component({
  selector: 'app-plant-hire-request',
  providers: [PlantService],
  templateUrl: './plant-hire-request.component.html',
  styleUrls: ['./plant-hire-request.component.css']
})
export class PlantHireRequestComponent implements OnInit {

  query = new Query();
  constructor(private PlantServiceClass: PlantService) {}
  ngOnInit() {
  }
}
