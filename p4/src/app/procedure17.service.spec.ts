import { TestBed } from '@angular/core/testing';

import { Procedure17Service } from './procedure17.service';

describe('Procedure17Service', () => {
  let service: Procedure17Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Procedure17Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
