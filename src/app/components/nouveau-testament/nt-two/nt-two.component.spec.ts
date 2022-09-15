import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtTwoComponent } from './nt-two.component';

describe('NtTwoComponent', () => {
  let component: NtTwoComponent;
  let fixture: ComponentFixture<NtTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
