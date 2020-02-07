import { async, TestBed } from '@angular/core/testing';
import { TodoFeatureModule } from './todo-feature.module';

describe('TodoFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TodoFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TodoFeatureModule).toBeDefined();
  });
});
