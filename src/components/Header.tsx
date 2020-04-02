import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

type IHeaderProps = {};
type IHeaderState = {};

class Header extends Component<IHeaderProps, IHeaderState> {
  render() {
    return (
      <AppBar position="static" className="navbar">
        <Toolbar>
          <Typography variant="h6" className="title">
            Todo List
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
