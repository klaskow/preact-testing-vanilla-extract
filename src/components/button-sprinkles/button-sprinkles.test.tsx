import { h } from "preact";
import { render, screen } from "@testing-library/preact";
import ButtonSprinklesNotRuntime from "./index";

it("should render button component when using createSprinkles NOT at runtime", () => {
  render(<ButtonSprinklesNotRuntime>Not at runtime</ButtonSprinklesNotRuntime>);

  const buttonEl = screen.getByRole("button", {
    name: /NOT at runtime/i,
  });
  expect(buttonEl).toBeInTheDocument();
});
