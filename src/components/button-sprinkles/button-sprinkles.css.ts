import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

const properties = defineProperties({
  properties: {
    backgroundColor: {
      light: "#fff",
      dark: "#000",
      gray: "#444",
    },
    color: {
      light: "#fff",
      dark: "#000",
    },
  },
});

const sprinklesFn = createSprinkles(properties);

const buttonSprinklesClass = sprinklesFn({
  backgroundColor: "gray",
  color: "light",
});

export { buttonSprinklesClass };
