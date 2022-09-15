import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtElevenComponent } from './nt-eleven.component';

describe('NtElevenComponent', () => {
  let component: NtElevenComponent;
  let fixture: ComponentFixture<NtElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NtElevenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NtElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
