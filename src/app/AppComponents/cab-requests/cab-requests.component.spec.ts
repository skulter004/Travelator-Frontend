import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabRequestsComponent } from './cab-requests.component';

describe('CabRequestsComponent', () => {
  let component: CabRequestsComponent;
  let fixture: ComponentFixture<CabRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabRequestsComponent]
    });
    fixture = TestBed.createComponent(CabRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
