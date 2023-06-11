import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutresReligionsComponent } from './autres-religions.component';

describe('AutresReligionsComponent', () => {
  let component: AutresReligionsComponent;
  let fixture: ComponentFixture<AutresReligionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutresReligionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutresReligionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
