import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteOptimizerComponent } from './route-optimizer.component';

describe('RouteOptimizerComponent', () => {
  let component: RouteOptimizerComponent;
  let fixture: ComponentFixture<RouteOptimizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteOptimizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteOptimizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
