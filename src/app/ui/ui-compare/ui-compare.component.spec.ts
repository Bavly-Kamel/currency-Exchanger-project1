import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCompareComponent } from './ui-compare.component';

describe('UiCompareComponent', () => {
  let component: UiCompareComponent;
  let fixture: ComponentFixture<UiCompareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiCompareComponent]
    });
    fixture = TestBed.createComponent(UiCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
