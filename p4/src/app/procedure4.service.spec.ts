import { TestBed } from '@angular/core/testing';

import { Procedure4Service } from './procedure4.service';

describe('Procedure4Service', () => {
  let service: Procedure4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Procedure4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
