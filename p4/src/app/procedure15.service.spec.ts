import { TestBed } from '@angular/core/testing';

import { Procedure15Service } from './procedure15.service';

describe('Procedure15Service', () => {
  let service: Procedure15Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Procedure15Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
