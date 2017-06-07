import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGranteeComponent } from './manage-grantee.component';

describe('ManageGranteeComponent', () => {
  let component: ManageGranteeComponent;
  let fixture: ComponentFixture<ManageGranteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGranteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGranteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
