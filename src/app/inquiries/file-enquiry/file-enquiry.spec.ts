import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileEnquiry } from './file-enquiry';

describe('FileEnquiry', () => {
  let component: FileEnquiry;
  let fixture: ComponentFixture<FileEnquiry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileEnquiry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileEnquiry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
