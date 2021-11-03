import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatingAndReproComponent } from './mating-and-repro.component';

describe('MatingAndReproComponent', () => {
  let component: MatingAndReproComponent;
  let fixture: ComponentFixture<MatingAndReproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatingAndReproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatingAndReproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
