import React, { Component } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

type IHeaderProps = {};
type IHeaderState = {};

export class Header extends Component<IHeaderProps, IHeaderState> {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className="menuButton"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="title">
            Todo List
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
