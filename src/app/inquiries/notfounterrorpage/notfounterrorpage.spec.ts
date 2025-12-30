import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notfounterrorpage } from './notfounterrorpage';

describe('Notfounterrorpage', () => {
  let component: Notfounterrorpage;
  let fixture: ComponentFixture<Notfounterrorpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notfounterrorpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notfounterrorpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
