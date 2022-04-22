import { ComponentChildren, h } from "preact";
import styles from "./button.module.css";

type Props = {
  children: ComponentChildren;
};

const Button = ({ children }: Props): h.JSX.Element => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
