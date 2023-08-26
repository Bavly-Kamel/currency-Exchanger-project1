import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiConvertComponent } from './ui-convert.component';

describe('UiConvertComponent', () => {
  let component: UiConvertComponent;
  let fixture: ComponentFixture<UiConvertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiConvertComponent]
    });
    fixture = TestBed.createComponent(UiConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
