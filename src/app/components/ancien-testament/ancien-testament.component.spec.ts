import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncienTestamentComponent } from './ancien-testament.component';

describe('AncienTestamentComponent', () => {
  let component: AncienTestamentComponent;
  let fixture: ComponentFixture<AncienTestamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AncienTestamentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AncienTestamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
