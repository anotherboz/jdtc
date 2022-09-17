import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesseOneComponent } from './messe-one.component';

describe('MesseOneComponent', () => {
  let component: MesseOneComponent;
  let fixture: ComponentFixture<MesseOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesseOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesseOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
