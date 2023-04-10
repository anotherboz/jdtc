import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationThreeComponent } from './organisation-three.component';

describe('OrganisationThreeComponent', () => {
  let component: OrganisationThreeComponent;
  let fixture: ComponentFixture<OrganisationThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisationThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
