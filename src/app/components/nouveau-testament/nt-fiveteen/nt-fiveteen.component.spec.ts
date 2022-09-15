import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtFiveteenComponent } from './nt-fiveteen.component';

describe('NtFiveteenComponent', () => {
  let component: NtFiveteenComponent;
  let fixture: ComponentFixture<NtFiveteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NtFiveteenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NtFiveteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
