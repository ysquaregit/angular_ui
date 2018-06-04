import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesorialComponent } from './accesorial.component';

describe('AccesorialComponent', () => {
  let component: AccesorialComponent;
  let fixture: ComponentFixture<AccesorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
