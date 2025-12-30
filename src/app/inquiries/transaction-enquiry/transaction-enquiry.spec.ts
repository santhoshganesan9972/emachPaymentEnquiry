import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionEnquiry } from './transaction-enquiry';

describe('TransactionEnquiry', () => {
  let component: TransactionEnquiry;
  let fixture: ComponentFixture<TransactionEnquiry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionEnquiry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionEnquiry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
