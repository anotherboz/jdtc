import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesseFourComponent } from './messe-four.component';

describe('MesseFourComponent', () => {
  let component: MesseFourComponent;
  let fixture: ComponentFixture<MesseFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesseFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesseFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
