import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameAndClassComponent } from './name-and-class.component';

describe('NameAndClassComponent', () => {
  let component: NameAndClassComponent;
  let fixture: ComponentFixture<NameAndClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameAndClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameAndClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
