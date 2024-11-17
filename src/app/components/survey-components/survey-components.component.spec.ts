import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyComponentsComponent } from './survey-components.component';

describe('SurveyComponentsComponent', () => {
  let component: SurveyComponentsComponent;
  let fixture: ComponentFixture<SurveyComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
