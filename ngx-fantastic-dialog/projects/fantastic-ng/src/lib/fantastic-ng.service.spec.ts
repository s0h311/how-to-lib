import { TestBed } from '@angular/core/testing';

import { FantasticNgService } from './fantastic-ng.service';

describe('FantasticNgService', () => {
  let service: FantasticNgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FantasticNgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
