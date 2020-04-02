import React from "react";
import { render } from "@testing-library/react";
import AddTodo from "../components/AddTodo";

// Checks whether the AddTodo renders properly
test("renders the add todo component", () => {
  const { getByText } = render(<AddTodo createTodo={(e: string) => {}} />);
  const linkElement = getByText(/Add New Todo Here/i);
  expect(linkElement).toBeInTheDocument();
});
