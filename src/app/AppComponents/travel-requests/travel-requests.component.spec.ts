import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelRequestsComponent } from './travel-requests.component';

describe('TravelRequestsComponent', () => {
  let component: TravelRequestsComponent;
  let fixture: ComponentFixture<TravelRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelRequestsComponent]
    });
    fixture = TestBed.createComponent(TravelRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
