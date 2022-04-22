import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";

export default {
  webpack(config, env, helpers, options) {
    config.plugins.push(new VanillaExtractPlugin());

    const [{ rule }] = helpers.getLoadersByName(config, "babel-loader");
    rule.options.plugins.push(require.resolve("@vanilla-extract/babel-plugin"));
  },
};
