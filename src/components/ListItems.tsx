import React, { Component } from "react";
import Cookies from "js-cookie";
import { Todo } from "../types";
import ListItem from "./ListItem";
import AddTodo from "./AddTodo";
import { Grid } from "@material-ui/core";

const TODO_COOKIE_KEY = "nicoalimin-todolist";
const TODO_COUNT_COOKIE_KEY = "nicoalimin-todolist-count";

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

  // getTodos is a function that reads todos from the browser's cookies and assigns it to
  // the local state for manipulation
  getTodos() {
    const todosString = Cookies.get(TODO_COOKIE_KEY);
    if (todosString) {
      const todos: Todo[] = JSON.parse(todosString);

      // Sorts the todos so that copmletes ones are at the end of the array
      todos.sort((_, b) => (b.IsCompleted ? -1 : 1));

      this.setState({ todos });
    }
  }

  // setTodos replaces the contents in the cookies with the desired todos
  setTodos(todo: Todo[]) {
    Cookies.set(TODO_COOKIE_KEY, todo);
    this.getTodos();
  }

  getTodoCountAndIncrement(): number {
    // simulates and auto-incrementing ID for the todos. Required because each todo needs
    // a unique identifier to be able to change isCompleted properly
    const countString: string | undefined = Cookies.get(TODO_COUNT_COOKIE_KEY);

    // if doesn't exist, assign it with the base case of one
    if (!countString) {
      Cookies.set(TODO_COUNT_COOKIE_KEY, "1");
      return 1;
    }

    const count: number = Number.parseInt(countString);
    Cookies.set(TODO_COUNT_COOKIE_KEY, `${count + 1}`);
    return count + 1;
  }

  // addTodo inserts a single todo
  addTodo(todoName: string) {
    const id = this.getTodoCountAndIncrement();
    this.setTodos([
      ...this.state.todos,
      {
        ID: id,
        Name: todoName,
        IsCompleted: false
      }
    ]);
  }

  // deleteSingleTodo iterates through the todos available, and removes a single todo with
  // given an ID
  deleteSingleTodo(todoID: number) {
    const newTodos: Todo[] = [];
    this.state.todos.forEach(t => {
      if (t.ID === todoID) return;
      newTodos.push(t);
    });
    this.setTodos(newTodos);
  }

  // toggleSingleTodoCompleted toggeles the state of the todo
  toggleSingleTodoCompleted(todoID: number) {
    const newTodos: Todo[] = this.state.todos.map(t => {
      if (t.ID === todoID) t.IsCompleted = !t.IsCompleted;
      return t;
    });
    this.setTodos(newTodos);
  }

  componentDidMount() {
    this.getTodos();
  }

  render() {
    const todos = this.state.todos?.map(t => {
      return (
        <ListItem
          key={t.ID}
          todo={t}
          onHandleDelete={() => this.deleteSingleTodo(t.ID)}
          onHandleChangeCompleted={() => this.toggleSingleTodoCompleted(t.ID)}
        />
      );
    });

    return (
      <Grid container className="list-item">
        <AddTodo createTodo={(todoName: string) => this.addTodo(todoName)} />
        {todos}
      </Grid>
    );
  }
}

export default ListItems;
