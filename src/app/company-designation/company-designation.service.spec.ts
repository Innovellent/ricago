import { TestBed, inject } from '@angular/core/testing';

import { CompanyDesignationService } from './company-designation.service';

describe('CompanyDesignationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyDesignationService]
    });
  });

  it('should ...', inject([CompanyDesignationService], (service: CompanyDesignationService) => {
    expect(service).toBeTruthy();
  }));
});
