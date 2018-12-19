module.exports = {
  plugins: ["prettier"],
  extends: "eslint:recommended",
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    sourceType: "module"
  },
  rules: {
    "prettier/prettier": "error"
  }
};
