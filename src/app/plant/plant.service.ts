import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {PlantInventoryEntry, Query} from './definitions';

@Injectable()
export class PlantService {

 plants: Array<PlantInventoryEntry> = [];
  constructor(private http: Http){}
  executeQuery(query: Query) {
    console.log(query);
    var params = new URLSearchParams();
    params.set('name', query.name);

    if (query.startDate)
      params.set('startDate', query.startDate.toString());
    if (query.endDate)
      params.set('endDate', query.endDate.toString());
    this.http
      .get('http://localhost:8090/api/inventory/plants', {search: params})
      .subscribe(response => this.plants = response.json());
  }

}

