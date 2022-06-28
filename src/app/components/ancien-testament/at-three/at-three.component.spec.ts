import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtThreeComponent } from './at-three.component';

describe('AtThreeComponent', () => {
  let component: AtThreeComponent;
  let fixture: ComponentFixture<AtThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
