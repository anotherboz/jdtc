import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtTenComponent } from './nt-ten.component';

describe('NtTenComponent', () => {
  let component: NtTenComponent;
  let fixture: ComponentFixture<NtTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NtTenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NtTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
