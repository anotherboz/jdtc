import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtFourComponent } from './nt-four.component';

describe('NtFourComponent', () => {
  let component: NtFourComponent;
  let fixture: ComponentFixture<NtFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
