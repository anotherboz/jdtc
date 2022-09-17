import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesseTwoComponent } from './messe-two.component';

describe('MesseTwoComponent', () => {
  let component: MesseTwoComponent;
  let fixture: ComponentFixture<MesseTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesseTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesseTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
