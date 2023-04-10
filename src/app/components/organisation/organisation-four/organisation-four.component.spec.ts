import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationFourComponent } from './organisation-four.component';

describe('OrganisationFourComponent', () => {
  let component: OrganisationFourComponent;
  let fixture: ComponentFixture<OrganisationFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisationFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
