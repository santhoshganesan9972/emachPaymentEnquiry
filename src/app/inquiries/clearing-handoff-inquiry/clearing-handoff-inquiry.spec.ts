import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearingHandoffInquiry } from './clearing-handoff-inquiry';

describe('ClearingHandoffInquiry', () => {
  let component: ClearingHandoffInquiry;
  let fixture: ComponentFixture<ClearingHandoffInquiry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClearingHandoffInquiry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearingHandoffInquiry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
