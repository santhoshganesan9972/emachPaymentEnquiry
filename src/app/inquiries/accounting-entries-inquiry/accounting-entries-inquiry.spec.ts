import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingEntriesInquiry } from './accounting-entries-inquiry';

describe('AccountingEntriesInquiry', () => {
  let component: AccountingEntriesInquiry;
  let fixture: ComponentFixture<AccountingEntriesInquiry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountingEntriesInquiry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountingEntriesInquiry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
