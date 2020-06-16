const {
  addBabelPlugins,
  addDecoratorsLegacy,
  disableEsLint,
  override
} = require("customize-cra");

module.exports = {
  webpack: override(
    disableEsLint(),
    addBabelPlugins(
      "@babel/plugin-proposal-object-rest-spread"
    ),
    addDecoratorsLegacy()
  )
};
