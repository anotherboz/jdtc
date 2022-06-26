import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauTestamentComponent } from './nouveau-testament.component';

describe('NouveauTestamentComponent', () => {
  let component: NouveauTestamentComponent;
  let fixture: ComponentFixture<NouveauTestamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauTestamentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauTestamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
