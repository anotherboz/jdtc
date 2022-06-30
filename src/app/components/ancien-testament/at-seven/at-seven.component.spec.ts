import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtSevenComponent } from './at-seven.component';

describe('AtSevenComponent', () => {
  let component: AtSevenComponent;
  let fixture: ComponentFixture<AtSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
