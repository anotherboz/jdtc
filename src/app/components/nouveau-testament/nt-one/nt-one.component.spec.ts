import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtOneComponent } from './nt-one.component';

describe('NtOneComponent', () => {
  let component: NtOneComponent;
  let fixture: ComponentFixture<NtOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
