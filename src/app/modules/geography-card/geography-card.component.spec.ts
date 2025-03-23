import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographyCardComponent } from './geography-card.component';

describe('GeographyCardComponent', () => {
  let component: GeographyCardComponent;
  let fixture: ComponentFixture<GeographyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeographyCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeographyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
