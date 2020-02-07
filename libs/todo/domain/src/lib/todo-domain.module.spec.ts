import { async, TestBed } from '@angular/core/testing';
import { TodoDomainModule } from './todo-domain.module';

describe('TodoDomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TodoDomainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TodoDomainModule).toBeDefined();
  });
});
