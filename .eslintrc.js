module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb-base",
  ],

  "parser": "babel-eslint",

  "env": {
    "mocha": true,
    "node": true,
  },

  globals: {
    document: true,
    expect: true,
    sinon: true,
    json: true,
    Promise: true,
    window: true,
    localStorage: true,
  },

  rules: {
    "no-console": "warn",
    "semi": ["error", "never"],
    "react/prop-types": "off",
    "class-methods-use-this": "off",
    "import/no-unresolved": "off",
    "no-unused-expressions": "off",
    "no-underscore-dangle": "off",
    "import/no-dynamic-require": "off",
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }]
  }
}
