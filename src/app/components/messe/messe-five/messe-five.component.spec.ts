import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesseFiveComponent } from './messe-five.component';

describe('MesseFiveComponent', () => {
  let component: MesseFiveComponent;
  let fixture: ComponentFixture<MesseFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesseFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesseFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
