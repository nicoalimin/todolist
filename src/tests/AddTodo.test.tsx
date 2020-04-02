import React from "react";
import { render } from "@testing-library/react";
import AddTodo from "../components/AddTodo";

// Checks whether the AddTodo renders properly
test("renders the add todo summary component", () => {
  const { getByText } = render(<AddTodo createTodo={_ => {}} />);
  const addTodoHere = getByText(/Add New Todo Here/i);
  expect(addTodoHere).toBeInTheDocument();
});
