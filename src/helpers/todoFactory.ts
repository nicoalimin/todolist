import { Todo } from "../types";

// TodoFactory generates a Todo object
// TODO: Add configuration options to the factory to customized generated todo
export const TodoFactory = (): Todo => {
  return {
    ID: 1,
    Name: "This is a todo",
    IsCompleted: false
  };
};
