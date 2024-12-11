import { TestBed } from '@angular/core/testing';

import { View1Service } from './view1.service';

describe('View1Service', () => {
  let service: View1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(View1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
