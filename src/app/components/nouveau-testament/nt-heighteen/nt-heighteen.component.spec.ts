import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtHeighteenComponent } from './nt-heighteen.component';

describe('NtHeighteenComponent', () => {
  let component: NtHeighteenComponent;
  let fixture: ComponentFixture<NtHeighteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NtHeighteenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NtHeighteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
