import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtThreeComponent } from './nt-three.component';

describe('NtThreeComponent', () => {
  let component: NtThreeComponent;
  let fixture: ComponentFixture<NtThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
