const overrides = {
  trailingComma: "es5",
  tabWidth: 4,
  semi: false,
  singleQuote: true,
  arrowParens: "avoid",
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      options: {
        endOfLine: "auto",
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      options: {
        endOfLine: "auto",
      },
    },
  ],
};

module.exports = overrides;
