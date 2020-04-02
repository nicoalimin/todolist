import React from "react";
import { render } from "@testing-library/react";
import TodoSummary from "../components/TodoSummary";

// Checks whether the TodoSummary renders properly
test("renders the add todo summary component", () => {
  const { getByText } = render(
    <TodoSummary
      numTodos={0}
      numTodosCompleted={0}
      isCompletedHidden={false}
      toggleIsCompletedHidden={() => {}}
    />
  );
  const numTodos = getByText(/Number of Todos:/i);
  expect(numTodos).toBeInTheDocument();
  const shoHiddenContents = getByText(/Show hidden contents/i);
  expect(shoHiddenContents).toBeInTheDocument();
  const numCompleted = getByText(/Completed:/i);
  expect(numCompleted).toBeInTheDocument();
});
