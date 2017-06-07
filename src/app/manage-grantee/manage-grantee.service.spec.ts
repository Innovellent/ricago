import { TestBed, inject } from '@angular/core/testing';

import { ManageGranteeService } from './manage-grantee.service';

describe('ManageGranteeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageGranteeService]
    });
  });

  it('should ...', inject([ManageGranteeService], (service: ManageGranteeService) => {
    expect(service).toBeTruthy();
  }));
});
