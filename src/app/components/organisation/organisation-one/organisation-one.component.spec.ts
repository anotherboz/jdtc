import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationOneComponent } from './organisation-one.component';

describe('OrganisationOneComponent', () => {
  let component: OrganisationOneComponent;
  let fixture: ComponentFixture<OrganisationOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisationOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
