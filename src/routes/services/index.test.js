import React from "react";
import { render, screen } from "test-utils";

import ProductDetailRoute from "./index";
import { useProduct } from "hooks/products";
import { buildProduct } from "models/builders/products";

jest.mock("hooks/products");

test("renders with a product", () => {
  useProduct.mockReturnValue(buildProduct());

  render(<ProductDetailRoute />);

  expect(
    screen.getByText("Sleek Wooden Pizza", { selector: "h1" })
  ).toBeInTheDocument();
});

test("not found product", () => {
  useProduct.mockReturnValue(null);

  render(<ProductDetailRoute />);

  expect(
    screen.getByText("Service not found", { selector: "h1" })
  ).toBeInTheDocument();
});
