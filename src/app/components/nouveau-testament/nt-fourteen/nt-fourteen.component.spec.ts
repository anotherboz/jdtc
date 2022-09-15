import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtFourteenComponent } from './nt-fourteen.component';

describe('NtFourteenComponent', () => {
  let component: NtFourteenComponent;
  let fixture: ComponentFixture<NtFourteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NtFourteenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NtFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
