import React from "react";
import { TodoItem } from "./TodoItem";

export interface TodoListProps {}

export const TodoList: React.FC<TodoListProps> = () => {
  return (
    <div>
      <TodoItem />
    </div>
  );
};
