import { TestBed } from '@angular/core/testing';

import { AutoRouteService } from './auto-route.service';

describe('AutoRouteService', () => {
  let service: AutoRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
