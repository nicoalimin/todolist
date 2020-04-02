import React, { Component } from "react";
import Cookies from "js-cookie";
import { Todo } from "../types";
import ListItem from "./ListItem";
import AddTodo from "./AddTodo";
import { Grid } from "@material-ui/core";

const TODO_COOKIE_KEY = "nicoalimin-todolist";

type IListItemsProps = {};
type IListItemsState = {
  todos: Todo[];
};

const initialState: IListItemsState = {
  todos: []
};

class ListItems extends Component<IListItemsProps, IListItemsState> {
  constructor(props: IListItemsProps) {
    super(props);
    this.state = initialState;
  }

  getTodos() {
    const todosString = Cookies.get(TODO_COOKIE_KEY);
    if (todosString) {
      const todos: Todo[] = JSON.parse(todosString);
      this.setState({ todos });
    }
  }

  setTodos(todo: Todo[]) {
    Cookies.set(TODO_COOKIE_KEY, todo);
    this.getTodos();
  }

  addTodo(todoName: string) {
    this.setTodos([
      ...this.state.todos,
      {
        Name: todoName,
        IsCompleted: false
      }
    ]);
  }

  componentDidMount() {
    this.getTodos();
  }

  render() {
    let todos;
    if (this.state.todos) {
      todos = this.state.todos.map(t => {
        return (
          <ListItem
            key={t.Name}
            todo={t}
            onHandleDelete={() => console.log("Delete Clicked")}
            onHandleFinished={() => console.log("Finished Clicked")}
          />
        );
      });
    }

    return (
      <Grid container className="list-item">
        <AddTodo createTodo={(todoName: string) => this.addTodo(todoName)} />
        {todos}
      </Grid>
    );
  }
}

export default ListItems;
