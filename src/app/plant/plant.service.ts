import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

import {Http, RequestOptions, URLSearchParams, Headers } from '@angular/http';

import {PlantInventoryEntry, PlantOrderRequest, Query} from './definitions';

@Injectable()
export class PlantService {

  plants: Array<PlantInventoryEntry> = [];
  plantsDetail: Array<PlantInventoryEntry> = [];

  constructor(private http: Http) {}

  executeQuery(query: Query) {

    var params = new URLSearchParams();
    params.set('name', query.name);
    if (query.startDate) {
      params.set('startDate', query.startDate.toString());
    }
    if (query.endDate) {
      params.set('endDate', query.endDate.toString());
    }

    this.http
      .get('http://localhost:8080/api/procurements/plants', {search: params})
      .subscribe(response => this.plants = response.json());
  }

  plant_hire_request(query: PlantOrderRequest) {

    let headers = new Headers ({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers, method: 'post' });

    this.http
      .post('http://localhost:8080/api/procurements/requests', JSON.stringify(query),options)
      .subscribe(response => this.handle(response.json()));

  }

handle(res)
{
  console.log(res);
}


  plantdetail(id: number) {

    this.http
      .get('http://localhost:8080/api/procurements/plants/' + id)
      .subscribe(response => this.plantsDetail = response.json());
  }

}


