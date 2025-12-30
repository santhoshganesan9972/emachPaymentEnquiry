import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftGPI } from './swift-gpi';

describe('SwiftGPI', () => {
  let component: SwiftGPI;
  let fixture: ComponentFixture<SwiftGPI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiftGPI]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiftGPI);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
