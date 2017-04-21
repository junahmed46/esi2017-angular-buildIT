import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantHireRequestResultComponent } from './plant-hire-request-result.component';

describe('PlantHireRequestResultComponent', () => {
  let component: PlantHireRequestResultComponent;
  let fixture: ComponentFixture<PlantHireRequestResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantHireRequestResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantHireRequestResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
