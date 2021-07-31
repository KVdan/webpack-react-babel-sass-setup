export const env = {
    browser: true,
    node: true,
    es2021: true,
};
export const extends = ["eslint:recommended", "plugin:react/recommended"];
export const parserOptions = {
    ecmaFeatures: {
        jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
};
export const plugins = ["react"];
export const rules = {};