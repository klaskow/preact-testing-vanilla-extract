import { h } from "preact";
import { render, screen } from "@testing-library/preact";
import ButtonSprinklesRuntime from "./index";

it("should render button component when using createSprinkles at runtime", () => {
  render(
    <ButtonSprinklesRuntime>createSprinkles at runtime</ButtonSprinklesRuntime>
  );

  const buttonEl = screen.getByRole("button", {
    name: /createsprinkles at runtime/i,
  });
  expect(buttonEl).toBeInTheDocument();
});
