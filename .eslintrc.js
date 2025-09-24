module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "no-console": "off", // Allow console for CLI tools
    "no-process-exit": "off", // Allow process.exit for CLI tools
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "prefer-const": "error",
    "no-var": "error",
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "coverage/",
    "build/build.js", // Ignore existing build.js to avoid conflicts
  ],
};
