import { TestBed, inject } from '@angular/core/testing';

import { CompanyRoleService } from './company-role.service';

describe('CompanyRoleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyRoleService]
    });
  });

  it('should ...', inject([CompanyRoleService], (service: CompanyRoleService) => {
    expect(service).toBeTruthy();
  }));
});
