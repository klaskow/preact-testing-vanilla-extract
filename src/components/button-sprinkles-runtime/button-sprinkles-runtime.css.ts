import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

const properties = defineProperties({
  properties: {
    width: {
      full: "100%",
      auto: "auto",
    },
    backgroundColor: {
      light: "#fff",
      dark: "#000",
    },
    color: {
      light: "#fff",
      dark: "#000",
    },
  },
});

const sprinklesFn = createSprinkles(properties);

type SprinklesType = Parameters<typeof sprinklesFn>[0];

export { sprinklesFn, SprinklesType };
