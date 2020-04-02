import React, { Component } from "react";
import { Grid, Checkbox } from "@material-ui/core";

type ITodoSummaryProps = {
  numTodos: number;
  numTodosCompleted: number;
  isCompletedHidden: boolean;
  toggleIsCompletedHidden: () => void;
};
type ITodoSummaryState = {};

class TodoSummary extends Component<ITodoSummaryProps, ITodoSummaryState> {
  render() {
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        className="todo-summary"
      >
        <Grid container justify="center" alignItems="center">
          <Grid item xs={3}>
            <div className="num-todos">{`Number of Todos: ${this.props.numTodos}`}</div>
          </Grid>
          <Grid item justify="center" xs={3}>
            <Checkbox
              checked={this.props.isCompletedHidden}
              onChange={() => this.props.toggleIsCompletedHidden()}
            />
            <div className="checkbox-content">{"Show hidden contents"}</div>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={3}>
            <div className="num-todos">{`Completed: ${this.props.numTodosCompleted}`}</div>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </Grid>
    );
  }
}

export default TodoSummary;
