import { ComponentChildren, h } from "preact";
import { buttonClass } from "./button-vanilla.css";

type Props = {
  children: ComponentChildren;
};

const ButtonVanilla = ({ children }: Props): h.JSX.Element => {
  return <button className={buttonClass}>{children}</button>;
};

export default ButtonVanilla;
