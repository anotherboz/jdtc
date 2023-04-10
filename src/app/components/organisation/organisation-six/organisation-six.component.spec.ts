import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationSixComponent } from './organisation-six.component';

describe('OrganisationSixComponent', () => {
  let component: OrganisationSixComponent;
  let fixture: ComponentFixture<OrganisationSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisationSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
