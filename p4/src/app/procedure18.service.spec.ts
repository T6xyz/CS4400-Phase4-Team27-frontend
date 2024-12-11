import { TestBed } from '@angular/core/testing';

import { Procedure18Service } from './procedure18.service';

describe('Procedure18Service', () => {
  let service: Procedure18Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Procedure18Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
