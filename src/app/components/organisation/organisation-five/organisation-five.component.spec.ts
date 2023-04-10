import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationFiveComponent } from './organisation-five.component';

describe('OrganisationFiveComponent', () => {
  let component: OrganisationFiveComponent;
  let fixture: ComponentFixture<OrganisationFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisationFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
