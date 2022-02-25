import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatypusesComponent } from './platypuses.component';

describe('PlatypusesComponent', () => {
  let component: PlatypusesComponent;
  let fixture: ComponentFixture<PlatypusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatypusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatypusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
