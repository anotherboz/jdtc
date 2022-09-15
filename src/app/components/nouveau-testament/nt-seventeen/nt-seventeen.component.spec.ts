import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtSeventeenComponent } from './nt-seventeen.component';

describe('NtSeventeenComponent', () => {
  let component: NtSeventeenComponent;
  let fixture: ComponentFixture<NtSeventeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NtSeventeenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NtSeventeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
