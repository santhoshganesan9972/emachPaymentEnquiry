import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerResponseInquiry } from './customer-response-inquiry';

describe('CustomerResponseInquiry', () => {
  let component: CustomerResponseInquiry;
  let fixture: ComponentFixture<CustomerResponseInquiry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerResponseInquiry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerResponseInquiry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
