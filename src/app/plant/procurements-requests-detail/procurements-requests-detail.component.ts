import { Component, OnInit } from '@angular/core';
import {PlantService} from '../plant.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-procurements-requests-detail',
  templateUrl: './procurements-requests-detail.component.html',
  providers: [PlantService],
  styleUrls: ['./procurements-requests-detail.component.css']
})
export class ProcurementsRequestsDetailComponent implements OnInit {

  id: string;
  private sub: any;
  constructor(private PlantServiceClass: PlantService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = '' + params['id'];
      this.PlantServiceClass.procurementsRequestsDetail(this.id);
    });

    console.log(this.PlantServiceClass.PlantOrderDetail);

  }


}
