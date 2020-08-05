import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetroGridComponent } from './metro-grid.component';

describe('MetroGridComponent', () => {
  let component: MetroGridComponent;
  let fixture: ComponentFixture<MetroGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetroGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetroGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
