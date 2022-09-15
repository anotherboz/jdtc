import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtSixteenComponent } from './nt-sixteen.component';

describe('NtSixteenComponent', () => {
  let component: NtSixteenComponent;
  let fixture: ComponentFixture<NtSixteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NtSixteenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NtSixteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
