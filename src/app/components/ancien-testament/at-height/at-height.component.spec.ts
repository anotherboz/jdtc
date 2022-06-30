import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtHeightComponent } from './at-height.component';

describe('AtHeightComponent', () => {
  let component: AtHeightComponent;
  let fixture: ComponentFixture<AtHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtHeightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
