import React, { Component } from "react";
import { Todo } from "../types";
import { Grid, TextField, Checkbox, IconButton } from "@material-ui/core";
import HighlightOff from "@material-ui/icons/HighlightOff";

type IListItemProps = {
  todo: Todo;
  onHandleDelete: () => void;
  onHandleChangeCompleted: () => void;
  onHandleChangeContent: () => void;
};
type IListItemState = {};

class ListItem extends Component<IListItemProps, IListItemState> {
  constructor(props: IListItemProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid container className="list-item">
        <Grid item xs={8}>
          <Checkbox
            checked={this.props.todo.IsCompleted}
            onChange={() => this.props.onHandleChangeCompleted()}
          />
          <TextField
            defaultValue={this.props.todo.Name}
            onChange={e => this.setState({ todo: e.target.value })}
          />
          <IconButton
            aria-label="remove"
            size="small"
            className="add-todo-button"
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
