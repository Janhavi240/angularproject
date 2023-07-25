import { TestBed } from '@angular/core/testing';

import { MyrouteguardService } from './myrouteguard.service';

describe('MyrouteguardService', () => {
  let service: MyrouteguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyrouteguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
