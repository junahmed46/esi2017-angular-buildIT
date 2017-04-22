export class Query {
  name: string;
  startDate: Date;
  endDate: Date;
}

export class PlantInventoryEntry {
  _id: string;
  name: string;
  description: string;
  price: number;
  _links: object;
  _xlinks: object;
}


export class PlantOrderRequest {
  siteEngineer: SiteEngineerEntry;
  worksEngineer: WorksEngineerEntry;
  productionSite: ProductionSiteEntry;
  entry: PlantEntry;
  rentalPeriod: RentalPeriodEntry;
}

export class PlantEntry {
  plant_id: number;
}
export class SiteEngineerEntry {
  _id: number;
}
export class WorksEngineerEntry {
  _id: number;
}
export class ProductionSiteEntry {
  _id: number;
}
export class RentalPeriodEntry {
  startDate: Date;
  endDate: Date;
}



