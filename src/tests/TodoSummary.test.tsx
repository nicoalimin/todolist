import React from "react";
import { render } from "@testing-library/react";
import TodoSummary from "../components/TodoSummary";

// Checks whether the TodoSummary renders properly
test("renders the add todo component", () => {
  const { getByText } = render(<TodoSummary createTodo={(e: string) => {}} />);
  const numTodos = getByText(/Number of Todos:/i);
  expect(numTodos).toBeInTheDocument();
  const shoHiddenContents = getByText(/Show hidden contents/i);
  expect(shoHiddenContents).toBeInTheDocument();
  const numCompleted = getByText(/Completed:/i);
  expect(numCompleted).toBeInTheDocument();
});
