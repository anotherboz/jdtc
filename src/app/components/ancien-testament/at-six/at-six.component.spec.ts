import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtSixComponent } from './at-six.component';

describe('AtSixComponent', () => {
  let component: AtSixComponent;
  let fixture: ComponentFixture<AtSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
