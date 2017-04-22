import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementsRequestsDetailComponent } from './procurements-requests-detail.component';

describe('ProcurementsRequestsDetailComponent', () => {
  let component: ProcurementsRequestsDetailComponent;
  let fixture: ComponentFixture<ProcurementsRequestsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcurementsRequestsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementsRequestsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
