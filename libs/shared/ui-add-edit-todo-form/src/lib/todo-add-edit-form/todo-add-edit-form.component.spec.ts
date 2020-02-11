import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddEditFormComponent } from './todo-add-edit-form.component';

describe('TodoAddEditFormComponent', () => {
  let component: TodoAddEditFormComponent;
  let fixture: ComponentFixture<TodoAddEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoAddEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAddEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
