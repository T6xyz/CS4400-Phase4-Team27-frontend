import { TestBed } from '@angular/core/testing';

import { Procedure8Service } from './procedure8.service';

describe('Procedure8Service', () => {
  let service: Procedure8Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Procedure8Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
