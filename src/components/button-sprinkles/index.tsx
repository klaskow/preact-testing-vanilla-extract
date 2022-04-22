import { ComponentChildren, h } from "preact";
import { buttonSprinklesClass } from "./button-sprinkles.css";

type Props = {
  children: ComponentChildren;
};

const ButtonSprinklesNotRuntime = ({ children }: Props): h.JSX.Element => {
  return <button className={buttonSprinklesClass}>{children}</button>;
};

export default ButtonSprinklesNotRuntime;
