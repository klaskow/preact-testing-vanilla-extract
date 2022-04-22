import { h } from "preact";
import { render, screen } from "@testing-library/preact";
import ButtonVanilla from "./index";

it("should render button component when using { style } from @vanilla-extract/css", () => {
  render(<ButtonVanilla>style from @vanilla-extract/css</ButtonVanilla>);

  const buttonEl = screen.getByRole("button", {
    name: /style from \@vanilla-extract\/css/i,
  });
  expect(buttonEl).toBeInTheDocument();
});
