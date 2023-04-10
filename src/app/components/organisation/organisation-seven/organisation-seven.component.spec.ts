import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationSevenComponent } from './organisation-seven.component';

describe('OrganisationSevenComponent', () => {
  let component: OrganisationSevenComponent;
  let fixture: ComponentFixture<OrganisationSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisationSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
