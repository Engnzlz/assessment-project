import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsOfRetentionComponent } from './steps-of-retention.component';

describe('StepsOfRetentionComponent', () => {
  let component: StepsOfRetentionComponent;
  let fixture: ComponentFixture<StepsOfRetentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsOfRetentionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsOfRetentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
