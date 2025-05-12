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
      deadCodeInjection: false,
      controlFlowFlattening: false,
      selfDefending: false,
      disableConsoleOutput: false,
      debugProtection: false,
      reservedNames: ["React", "react", "useState", "useEffect", "useRef"],
      reservedStrings: ["\\s*function\\s*\\(\\)"],
      domainLock: [],
    });

    config.plugins.push(obfuscatorPlugin);
  }

  return config;
};
