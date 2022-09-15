import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtNineComponent } from './nt-nine.component';

describe('NtNineComponent', () => {
  let component: NtNineComponent;
  let fixture: ComponentFixture<NtNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NtNineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NtNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
