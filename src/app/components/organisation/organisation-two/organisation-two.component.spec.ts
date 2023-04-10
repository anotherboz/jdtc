import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationTwoComponent } from './organisation-two.component';

describe('OrganisationTwoComponent', () => {
  let component: OrganisationTwoComponent;
  let fixture: ComponentFixture<OrganisationTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisationTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
