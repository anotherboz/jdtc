import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtOneComponent } from './at-one.component';

describe('AtOneComponent', () => {
  let component: AtOneComponent;
  let fixture: ComponentFixture<AtOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
