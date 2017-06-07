import { TestBed, inject } from '@angular/core/testing';

import { CompanyBankService } from './company-bank.service';

describe('CompanyBankService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyBankService]
    });
  });

  it('should ...', inject([CompanyBankService], (service: CompanyBankService) => {
    expect(service).toBeTruthy();
  }));
});
