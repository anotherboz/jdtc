import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtSixComponent } from './nt-six.component';

describe('NtSixComponent', () => {
  let component: NtSixComponent;
  let fixture: ComponentFixture<NtSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
