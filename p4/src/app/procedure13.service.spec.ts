import { TestBed } from '@angular/core/testing';

import { Procedure13Service } from './procedure13.service';

describe('Procedure13Service', () => {
  let service: Procedure13Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Procedure13Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
