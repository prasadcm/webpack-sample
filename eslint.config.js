// eslint.config.js
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

export default defineConfig([
    {
        name: "webpack-sample/recommended-rules-override",
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...eslintConfigPrettier.rules, // disables conflicting rules with Prettier

            semi: ["error", "always"],
            "no-duplicate-imports": "error",
        },
    },
    globalIgnores([
        "build/**/*",
        "webpack.common.js",
        "webpack.dev.js",
        "webpack.prod.js",
    ]),
]);
