import React, { Component } from "react";

type IAddTodoProps = {
  createTodo: (todoName: string) => void;
};
type IAddTodoState = {};

class AddTodo extends Component<IAddTodoProps, IAddTodoState> {
  render() {
    return <div>Add Todo</div>;
  }
}

export default AddTodo;
