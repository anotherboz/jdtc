import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtFiveComponent } from './at-five.component';

describe('AtFiveComponent', () => {
  let component: AtFiveComponent;
  let fixture: ComponentFixture<AtFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
