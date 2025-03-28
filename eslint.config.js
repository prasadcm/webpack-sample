import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

export default defineConfig([
    {
        name: "webpack-sample/recommended-rules-override",
        files: ["**/*.js"],
        plugins: { js },
        extends: ["js/recommended"],
        rules: {
            semi: ["error", "always"],
            quotes: ["error", "single"],
            "no-duplicate-imports": "error",
        },
        languageOptions: {
            globals: globals.browser,
            sourceType: "module",
            ecmaVersion: "latest",
        },
    },
    globalIgnores([
        "build/**/*",
        "webpack.common.js",
        "webpack.dev.js",
        "webpack.prod.js",
    ]),
    eslintConfigPrettier,
]);
