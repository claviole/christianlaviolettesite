const JavaScriptObfuscator = require("webpack-obfuscator");

module.exports = function override(config, env) {
  // Only apply obfuscation in production build
  if (env === "production") {
    const obfuscatorPlugin = new JavaScriptObfuscator({
      rotateStringArray: true,
      shuffleStringArray: true,
      stringArray: true,
      stringArrayEncoding: ["base64"],
      splitStrings: true,
      identifierNamesGenerator: "hexadecimal",
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 0.5,
      deadCodeInjection: true,
      deadCodeInjectionThreshold: 0.3,
      debugProtection: false,
      selfDefending: true,
    });

    config.plugins.push(obfuscatorPlugin);
  }

  return config;
};
