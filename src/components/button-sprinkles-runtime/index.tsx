import clsx from "clsx";
import { ComponentChildren, h } from "preact";
import { sprinklesFn, SprinklesType } from "./button-sprinkles-runtime.css";

type Props = {
  sprinkles?: SprinklesType;
  children: ComponentChildren;
};

const ButtonSprinklesRuntime = ({
  children,
  sprinkles,
}: Props): h.JSX.Element => {
  return (
    <button
      className={clsx(sprinklesFn({ width: "auto", ...(sprinkles ?? {}) }))}
    >
      {children}
    </button>
  );
};

export default ButtonSprinklesRuntime;
