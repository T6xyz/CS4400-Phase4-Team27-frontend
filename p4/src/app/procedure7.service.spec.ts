import { TestBed } from '@angular/core/testing';

import { Procedure7Service } from './procedure7.service';

describe('Procedure7Service', () => {
  let service: Procedure7Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Procedure7Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
