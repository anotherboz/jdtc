import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtTwelveComponent } from './nt-twelve.component';

describe('NtTwelveComponent', () => {
  let component: NtTwelveComponent;
  let fixture: ComponentFixture<NtTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NtTwelveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NtTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
