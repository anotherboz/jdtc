import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtHeightComponent } from './nt-height.component';

describe('NtHeightComponent', () => {
  let component: NtHeightComponent;
  let fixture: ComponentFixture<NtHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtHeightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
