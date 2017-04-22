import { Component, OnInit } from '@angular/core';
import {PlantInventoryEntry, Query} from '../definitions';
import {PlantService} from '../plant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plantdetail',
  templateUrl: './plantdetail.component.html',
  providers: [PlantService],
  styleUrls: ['./plantdetail.component.css']
})
export class PlantdetailComponent implements OnInit {

  id: number;
  private sub: any;
  constructor(private PlantServiceClass: PlantService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.PlantServiceClass.plantdetail(this.id);
    });


  }

}
