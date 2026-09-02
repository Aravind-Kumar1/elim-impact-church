import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  ...compat.config({
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "warn",
    },
  }),
].map((config) => {
  if (config.languageOptions?.parser && typeof config.languageOptions.parser === "object") {
    config.languageOptions.parser = {
      ...config.languageOptions.parser,
      meta: {
        name: "next-parser",
        ...(config.languageOptions.parser.meta || {}),
      },
    };
  }
  return config;
});

export default eslintConfig;
