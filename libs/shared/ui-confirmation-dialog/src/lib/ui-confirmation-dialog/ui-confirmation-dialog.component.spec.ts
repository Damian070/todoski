import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiConfirmationDialogComponent } from './ui-confirmation-dialog.component';

describe('UiDialogComponent', () => {
  let component: UiConfirmationDialogComponent;
  let fixture: ComponentFixture<UiConfirmationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiConfirmationDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
