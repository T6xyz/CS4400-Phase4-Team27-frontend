import { TestBed } from '@angular/core/testing';

import { Procedure21Service } from './procedure21.service';

describe('Procedure21Service', () => {
  let service: Procedure21Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Procedure21Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
