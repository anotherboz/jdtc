import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtThristeenComponent } from './nt-thristeen.component';

describe('NtThristeenComponent', () => {
  let component: NtThristeenComponent;
  let fixture: ComponentFixture<NtThristeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NtThristeenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NtThristeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
