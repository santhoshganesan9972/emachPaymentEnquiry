import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearingResponseInquiry } from './clearing-response-inquiry';

describe('ClearingResponseInquiry', () => {
  let component: ClearingResponseInquiry;
  let fixture: ComponentFixture<ClearingResponseInquiry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClearingResponseInquiry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearingResponseInquiry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
