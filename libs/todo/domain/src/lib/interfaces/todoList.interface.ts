import {Todo} from "./todo.interface";
import {TodosEntitiesState} from "@todo/todo/data-access";

export  default interface TodoListInterface {
  finished: TodosEntitiesState,
  active: TodosEntitiesState,
  selected: Todo | null
}
