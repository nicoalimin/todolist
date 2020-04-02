import React from "react";
import { render } from "@testing-library/react";
import TodoSummary from "../components/TodoSummary";

// Checks whether the TodoSummary renders properly
test("renders the add todo summary component", () => {
  const numTodosCount = 0;
  const numTodosCompletedCount = 0;

  const { getByText } = render(
    <TodoSummary
      numTodos={numTodosCount}
      numTodosCompleted={numTodosCompletedCount}
      isCompletedHidden={false}
      toggleIsCompletedHidden={() => {}}
    />
  );
  const numTodos = getByText(`Number of Todos: ${numTodosCount}`);
  expect(numTodos).toBeInTheDocument();

  const shoHiddenContents = getByText(/Show hidden contents/i);
  expect(shoHiddenContents).toBeInTheDocument();

  const numCompleted = getByText(`Completed: ${numTodosCompletedCount}`);
  expect(numCompleted).toBeInTheDocument();
});
