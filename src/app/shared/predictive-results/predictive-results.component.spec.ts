import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictiveResultsComponent } from './predictive-results.component';

describe('PredictiveResultsComponent', () => {
  let component: PredictiveResultsComponent;
  let fixture: ComponentFixture<PredictiveResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictiveResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictiveResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
