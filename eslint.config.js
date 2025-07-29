// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import parserTs from "@typescript-eslint/parser";
import pluginTs from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginImport from "eslint-plugin-import";
import pluginPrettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    ignores: ["dist", "node_modules"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      "@typescript-eslint": pluginTs,
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      import: pluginImport,
      prettier: pluginPrettier,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginTs.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-no-target-blank": "off",
      "import/order": [
        "off",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
        },
      ],
      "prettier/prettier": "warn",
    },
  },
  {
    // Prettier 마지막에 끼워넣기 (형식 충돌 방지용)
    rules: prettierConfig.rules,
  },
  ...storybook.configs["flat/recommended"],
];
