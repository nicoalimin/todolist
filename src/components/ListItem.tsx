import React, { Component } from "react";
import { Todo } from "../types";
import { Grid, Checkbox, IconButton } from "@material-ui/core";
import HighlightOff from "@material-ui/icons/HighlightOff";

type IListItemProps = {
  todo: Todo;
  onHandleDelete: () => void;
  onHandleChangeCompleted: () => void;
};
type IListItemState = {};

class ListItem extends Component<IListItemProps, IListItemState> {
  constructor(props: IListItemProps) {
    super(props);
    this.state = {};
  }

  render() {
    // adds strikethrough on the todo if it is completed
    const todoContent = !this.props.todo.IsCompleted ? (
      this.props.todo.Name
    ) : (
      <s>{this.props.todo.Name}</s>
    );

    return (
      <Grid container justify="center" className="list-item">
        <Grid item xs={8}>
          <Checkbox
            checked={this.props.todo.IsCompleted}
            onChange={() => this.props.onHandleChangeCompleted()}
          />
          <div className="list-item-content">{todoContent}</div>
          <IconButton
            aria-label="remove"
            size="small"
            className="delete-todo-button"
            onClick={() => this.props.onHandleDelete()}
          >
            <HighlightOff />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
}

export default ListItem;
