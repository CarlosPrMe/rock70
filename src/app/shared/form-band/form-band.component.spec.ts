import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBandComponent } from './form-band.component';

describe('FormBandComponent', () => {
  let component: FormBandComponent;
  let fixture: ComponentFixture<FormBandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
