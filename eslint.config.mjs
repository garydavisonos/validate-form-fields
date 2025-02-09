import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { 
      ecmaVersion: 2020, 
      sourceType: "module", 
      globals: globals.browser,
    }
  },
  pluginJs.configs.recommended,
];