import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
//add sonarjs
import sonarjs from "eslint-plugin-sonarjs";
//add unicorn
import unicorn from "eslint-plugin-unicorn";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  sonarjs.configs.recommended,
  unicorn.configs.recommended,
];