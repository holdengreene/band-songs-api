module.exports = {
  plugins: ["prettier"],
  extends: "eslint:recommended",
  env: {
    node: true,
    es6: true
  },
  rules: {
    "prettier/prettier": "error"
  }
};
