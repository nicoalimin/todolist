import React from "react";
import { render } from "@testing-library/react";
import ListItems from "../components/ListItems";

// Checks whether the ListItems renders properly
test("renders the add todo component", () => {
  render(<ListItems />);
});
