import React from "react";
import { render } from "@testing-library/react";
import ListItem from "../components/ListItem";
import { TodoFactory } from "../helpers";

// Checks whether the ListItem renders properly
test("renders the add todo component", () => {
  const todo = TodoFactory();
  const { getByText } = render(
    <ListItem
      onHandleDelete={() => {}}
      onHandleChangeCompleted={() => {}}
      todo={todo}
    />
  );
  const linkElement = getByText(todo.Name);
  expect(linkElement).toBeInTheDocument();
});
