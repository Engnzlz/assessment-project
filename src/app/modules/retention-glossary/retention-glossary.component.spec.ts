import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetentionGlossaryComponent } from './retention-glossary.component';

describe('RetentionGlossaryComponent', () => {
  let component: RetentionGlossaryComponent;
  let fixture: ComponentFixture<RetentionGlossaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetentionGlossaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetentionGlossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
