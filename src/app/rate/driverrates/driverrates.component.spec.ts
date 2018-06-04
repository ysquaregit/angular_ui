import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverratesComponent } from './driverrates.component';

describe('DriverratesComponent', () => {
  let component: DriverratesComponent;
  let fixture: ComponentFixture<DriverratesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverratesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
