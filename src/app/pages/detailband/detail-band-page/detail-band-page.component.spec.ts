import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBandPageComponent } from './detail-band-page.component';

describe('DetailBandPageComponent', () => {
  let component: DetailBandPageComponent;
  let fixture: ComponentFixture<DetailBandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBandPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
