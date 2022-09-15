import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtFiveComponent } from './nt-five.component';

describe('NtFiveComponent', () => {
  let component: NtFiveComponent;
  let fixture: ComponentFixture<NtFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
