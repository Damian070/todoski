import { async, TestBed } from '@angular/core/testing';
import { TodoShellModule } from './todo-shell.module';

describe('TodoShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TodoShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TodoShellModule).toBeDefined();
  });
});
