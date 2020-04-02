import React, { PureComponent } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

type IHeaderProps = {};

class Header extends PureComponent<IHeaderProps> {
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
