import React from "react";
import { render } from "@testing-library/react";
import { Header } from "../components/Header";

// Checks whether the Header renders properly
test("renders learn react link", () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/Todo List/i);
  expect(linkElement).toBeInTheDocument();
});
