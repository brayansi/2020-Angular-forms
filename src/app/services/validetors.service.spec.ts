import { TestBed } from '@angular/core/testing';

import { ValidetorsService } from './validetors.service';

describe('ValidetorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidetorsService = TestBed.get(ValidetorsService);
    expect(service).toBeTruthy();
  });
});
