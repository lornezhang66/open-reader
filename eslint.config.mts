import obsidianmd from "eslint-plugin-obsidianmd";
import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig(
  globalIgnores([
    "node_modules",
    "main.js",
    "site",
    "esbuild.config.mjs",
    "eslint.config.mts",
  ]),
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  ...obsidianmd.configs.recommended,
  {
    rules: {
      "obsidianmd/ui/sentence-case": ["warn", {
        acronyms: ["API", "CLI", "HTML", "HTTP", "TTS", "WAV", "YAML"],
        brands: ["Local TTS", "macOS", "Open Reader", "Windows"],
        enforceCamelCaseLower: true,
      }],
    },
  },
);
