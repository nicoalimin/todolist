import { Todo } from "../types";

export const TodoFactory = (): Todo => {
  return {
    ID: 1,
    Name: "This is a todo",
    IsCompleted: false
  };
};
