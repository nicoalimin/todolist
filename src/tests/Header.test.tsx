import React from "react";
import { render } from "@testing-library/react";
import Header from "../components/Header";

// Checks whether the Header renders properly
test("renders header component", () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/Todo List/i);
  expect(linkElement).toBeInTheDocument();
});
