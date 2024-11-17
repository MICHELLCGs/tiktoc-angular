import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaItemComponent } from './encuesta-item.component';

describe('EncuestaItemComponent', () => {
  let component: EncuestaItemComponent;
  let fixture: ComponentFixture<EncuestaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncuestaItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
