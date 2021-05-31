import React from "react";
import { render } from "test-utils";

import Hero from "./Hero";

test("renders Hero with children", () => {
  const image = "https://test/image.jpg";
  const { getByText } = render(
    <Hero image={image}>
      <p>Labore neque id ducimus dolore.</p>
    </Hero>
  );

  expect(getByText("Labore neque id ducimus dolore.")).toBeInTheDocument();
});

test("renders image background", () => {
  const image = "https://test/image.jpg";
  const { getByTestId } = render(<Hero image={image} />);

  expect(getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image,
  });
});
