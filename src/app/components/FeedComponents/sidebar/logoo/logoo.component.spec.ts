import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogooComponent } from './logoo.component';

describe('LogooComponent', () => {
  let component: LogooComponent;
  let fixture: ComponentFixture<LogooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogooComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
