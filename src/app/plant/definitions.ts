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

