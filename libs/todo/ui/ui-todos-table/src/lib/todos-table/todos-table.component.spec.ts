import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosTableComponent } from './todos-table.component';

describe('TodosTableComponent', () => {
  let component: TodosTableComponent;
  let fixture: ComponentFixture<TodosTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodosTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
