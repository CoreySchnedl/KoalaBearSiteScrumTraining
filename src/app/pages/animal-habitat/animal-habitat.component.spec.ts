import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalHabitatComponent } from './animal-habitat.component';

describe('AnimalHabitatComponent', () => {
  let component: AnimalHabitatComponent;
  let fixture: ComponentFixture<AnimalHabitatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalHabitatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalHabitatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
