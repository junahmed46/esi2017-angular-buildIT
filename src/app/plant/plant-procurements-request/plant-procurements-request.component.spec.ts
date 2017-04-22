import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantProcurementsRequestComponent } from './plant-procurements-request.component';

describe('PlantProcurementsRequestComponent', () => {
  let component: PlantProcurementsRequestComponent;
  let fixture: ComponentFixture<PlantProcurementsRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantProcurementsRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantProcurementsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
