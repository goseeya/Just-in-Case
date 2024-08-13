import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("plugin:@typescript-eslint/recommended", "prettier"), {
    languageOptions: {
        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
                moduleDirectory: ["node_modules", "src/"],
            },

            typescript: {},
        },
    },

    rules: {
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "react/forbid-prop-types": 0,

        "react/prop-types": 0,
        

        "@typescript-eslint/array-type": "error",
        "react/jsx-props-no-spreading": "off",

        "no-restricted-syntax": ["error", {
            selector: "CallExpression[arguments.length=1] > MemberExpression.callee > Identifier.property[name='reduce']",
            message: "Provide initialValue to .reduce().",
        }],

        "import/prefer-default-export": "off",
    },
}, {
    files: ["**/*.config*.js"],

    rules: {
        "@typescript-eslint/no-var-requires": 0,
    },
}, {
    files: ["**/types.ts"],

    rules: {
        "import/prefer-default-export": 0,
    },
}, {
    files: ["**/*.js"],

    rules: {
        "@typescript-eslint/explicit-module-boundary-types": 0,
    },
}];