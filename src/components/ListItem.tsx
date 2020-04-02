import React, { Component } from "react";
import { Todo } from "../types";

type IListItemProps = {
  todo: Todo;
  onHandleDelete: () => void;
  onHandleFinished: () => void;
};
type IListItemState = {};

class ListItem extends Component<IListItemProps, IListItemState> {
  constructor(props: IListItemProps) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>{this.props.todo.Name}</div>;
  }
}

export default ListItem;
