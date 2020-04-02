import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

// Checks whether the app renders properly
test("renders app component link", () => {
  render(<App />);
});
