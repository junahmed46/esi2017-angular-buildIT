import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantHireRequestComponent } from './plant-hire-request.component';

describe('PlantHireRequestComponent', () => {
  let component: PlantHireRequestComponent;
  let fixture: ComponentFixture<PlantHireRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantHireRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantHireRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
