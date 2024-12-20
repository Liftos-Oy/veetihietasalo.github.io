import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraneSelectorComponent } from './crane-selector.component';

describe('CraneSelectorComponent', () => {
  let component: CraneSelectorComponent;
  let fixture: ComponentFixture<CraneSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CraneSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraneSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
