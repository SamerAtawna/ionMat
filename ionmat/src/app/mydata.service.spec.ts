import { TestBed } from '@angular/core/testing';

import { MydataService } from './mydata.service';

describe('MydataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MydataService = TestBed.get(MydataService);
    expect(service).toBeTruthy();
  });
});
