import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtNineteenComponent } from './nt-nineteen.component';

describe('NtNineteenComponent', () => {
  let component: NtNineteenComponent;
  let fixture: ComponentFixture<NtNineteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NtNineteenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NtNineteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
