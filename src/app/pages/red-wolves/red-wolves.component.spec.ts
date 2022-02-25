import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedWolvesComponent } from './red-wolves.component';

describe('RedWolvesComponent', () => {
  let component: RedWolvesComponent;
  let fixture: ComponentFixture<RedWolvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedWolvesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedWolvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
