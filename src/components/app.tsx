import { FunctionalComponent, h } from "preact";
import Button from "../components/button";
import ButtonVanilla from "./button-vanilla";
import ButtonSprinkles from "./button-sprinkles";
import ButtonSprinklesRuntime from "./button-sprinkles-runtime";

const App: FunctionalComponent = () => {
  return (
    <div id="preact_root">
      <Button>CSS Modules</Button>
      <ButtonVanilla>style imported from @vanilla-extract/css</ButtonVanilla>
      <ButtonSprinkles>
        createSprinkles NOT at runtime (*.css.ts)
      </ButtonSprinkles>
      <ButtonSprinklesRuntime sprinkles={{ width: "full" }}>
        createSprinkles at runtime (imported sprinklesFn in component)
      </ButtonSprinklesRuntime>
    </div>
  );
};

export default App;
