import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDesignationComponent } from './company-designation.component';

describe('CompanyDesignationComponent', () => {
  let component: CompanyDesignationComponent;
  let fixture: ComponentFixture<CompanyDesignationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDesignationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
