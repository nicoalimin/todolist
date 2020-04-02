import React, { Component } from "react";
import { TextField, Grid, IconButton } from "@material-ui/core";
import Add from "@material-ui/icons/Add";

type IAddTodoProps = {
  createTodo: (todoName: string) => void;
};
type IAddTodoState = {
  todo: string;
};

const initialState: IAddTodoState = {
  todo: ""
};

class AddTodo extends Component<IAddTodoProps, IAddTodoState> {
  constructor(props: IAddTodoProps) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <Grid container justify="center" className="add-todo">
        <Grid item xs={8}>
          <IconButton
            aria-label="add"
            size="small"
            className="add-todo-button"
            disabled={!this.state.todo}
            onClick={() => this.props.createTodo(this.state.todo)}
          >
            <Add />
          </IconButton>
          <TextField
            label="Add New Todo Here"
            className="add-todo-field"
            onChange={e => this.setState({ todo: e.target.value })}
          />
        </Grid>
      </Grid>
    );
  }
}

export default AddTodo;
