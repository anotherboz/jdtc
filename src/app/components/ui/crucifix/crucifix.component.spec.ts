import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrucifixComponent } from './crucifix.component';

describe('CrucifixComponent', () => {
  let component: CrucifixComponent;
  let fixture: ComponentFixture<CrucifixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrucifixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrucifixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
