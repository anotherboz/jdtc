import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesseThreeComponent } from './messe-three.component';

describe('MesseThreeComponent', () => {
  let component: MesseThreeComponent;
  let fixture: ComponentFixture<MesseThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesseThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesseThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
