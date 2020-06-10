import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBandPageComponent } from './add-band-page.component';

describe('AddBandPageComponent', () => {
  let component: AddBandPageComponent;
  let fixture: ComponentFixture<AddBandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBandPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
