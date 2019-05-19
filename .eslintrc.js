module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["eslint-plugin-local-rules"],
  rules: {
    "local-rules/no-bad-await": "error"
  }
};
