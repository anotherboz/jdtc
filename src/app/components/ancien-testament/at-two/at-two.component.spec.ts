import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtTwoComponent } from './at-two.component';

describe('AtTwoComponent', () => {
  let component: AtTwoComponent;
  let fixture: ComponentFixture<AtTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
