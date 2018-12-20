module.exports = {
  plugins: ["prettier"],
  extends: "eslint:recommended",
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "2017"
  },
  rules: {
    "prettier/prettier": "error"
  }
};
