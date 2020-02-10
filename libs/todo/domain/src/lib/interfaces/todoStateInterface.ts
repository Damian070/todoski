import {Todo} from "./todo.interface";
import {TodosEntitiesState} from "@todo/todo/data-access";

export  interface TodoStateInterface {
  finished: TodosEntitiesState,
  active: TodosEntitiesState,
  selected: Todo | null
}
