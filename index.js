/**
 * Copyright (c) 2020-present, moebel.de Einrichten & Wohnen AG. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    'plugin:sonarjs/recommended'
  ],
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier", "import", "sonarjs"],
  env: {
    browser: true,
    jasmine: true,
    jest: true,
    node: true,
    es6: true,
  },
  rules: {
    "prettier/prettier": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": ["off", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-empty-function": "off",
    "no-case-declarations": "off",
    "import/first": "error",
    "curly": ['error'],
    'sonarjs/no-identical-expressions': ['error', 3],
    "import/order": [
      "warn",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          ["parent", "sibling", "index"],
        ],
        "newlines-between": "ignore",
      },
    ],
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",
};
