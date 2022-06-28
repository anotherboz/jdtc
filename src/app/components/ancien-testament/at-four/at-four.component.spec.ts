import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtFourComponent } from './at-four.component';

describe('AtFourComponent', () => {
  let component: AtFourComponent;
  let fixture: ComponentFixture<AtFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
