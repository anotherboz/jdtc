import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtSevenComponent } from './nt-seven.component';

describe('NtSevenComponent', () => {
  let component: NtSevenComponent;
  let fixture: ComponentFixture<NtSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
