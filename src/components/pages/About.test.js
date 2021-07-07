import React from "react";
import { render, screen } from "test-utils";

import About from "./About";

beforeEach(() => {
  jest.resetAllMocks();
});

test("renders about page", () => {
  render(<About></About>);
  expect(screen.getByText("Meet our photographers")).toBeInTheDocument();
});
