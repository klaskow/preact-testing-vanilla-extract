import { h } from "preact";
import { render, screen } from "@testing-library/preact";
import Button from "./index";

it("should render button component when using with css modules", () => {
  render(<Button>CSS Modules</Button>);

  const buttonEl = screen.getByRole("button", {
    name: /css modules/i,
  });
  expect(buttonEl).toBeInTheDocument();
});
