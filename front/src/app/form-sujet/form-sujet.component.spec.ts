import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSujetComponent } from './form-sujet.component';

describe('FormSujetComponent', () => {
  let component: FormSujetComponent;
  let fixture: ComponentFixture<FormSujetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSujetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
