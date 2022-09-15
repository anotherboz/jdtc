import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtTwentyComponent } from './nt-twenty.component';

describe('NtTwentyComponent', () => {
  let component: NtTwentyComponent;
  let fixture: ComponentFixture<NtTwentyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtTwentyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtTwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
