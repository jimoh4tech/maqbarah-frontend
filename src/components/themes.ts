import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Bricolage Grotesque Variable" },
        body: { value: "Bricolage Grotesque Variable" },
      },
      colors: {
        maq: {
          50: { value: "#e3f6f0" }, // Lightest shade (Base Color)
          100: { value: "#b7e6d8" },
          200: { value: "#86d5bf" },
          300: { value: "#54c4a5" },
          400: { value: "#28b38d" },
          500: { value: "#089c75" }, // Default Button Color
          600: { value: "#067c5d" },
          700: { value: "#065b44" },
          800: { value: "#044636" },
          900: { value: "#023028" },
          950: { value: "#011915" },
        },
        olive: {
          50: { value: "#f3f9e8" }, // Lightest shade (Base Color)
          100: { value: "#e0efc2" },
          200: { value: "#c8e397" },
          300: { value: "#add66a" },
          400: { value: "#94c944" },
          500: { value: "#7aae2e" }, // Default Button Color
          600: { value: "#639021" },
          700: { value: "#5C8D23" },
          800: { value: "#426617" },
          900: { value: "#2c470e" },
          950: { value: "#1a2c06" },
        },
        forest: {
          50: { value: "#e8f3e7" }, // Lightest shade (Base Color)
          100: { value: "#c7e1c3" },
          200: { value: "#a2cd9b" },
          300: { value: "#7bb873" },
          400: { value: "#57a452" },
          500: { value: "#3d883a" }, // Default Button Color
          600: { value: "#2e6b2b" },
          700: { value: "#1C4F19" },
          800: { value: "#153b13" },
          900: { value: "#0e260c" },
          950: { value: "#061404" },
        },
      },
    },
    semanticTokens: {
      colors: {
        maq: {
          solid: { value: "{colors.maq.500}" },
          contrast: { value: "{colors.maq.100}" },
          fg: { value: "{colors.maq.700}" },
          muted: { value: "{colors.maq.100}" },
          subtle: { value: "{colors.maq.200}" },
          emphasized: { value: "{colors.maq.300}" },
          focusRing: { value: "{colors.maq.500}" },
        },
        olive: {
          solid: { value: "{colors.olive.500}" },
          contrast: { value: "{colors.olive.100}" },
          fg: { value: "{colors.olive.700}" },
          muted: { value: "{colors.olive.100}" },
          subtle: { value: "{colors.olive.200}" },
          emphasized: { value: "{colors.olive.300}" },
          focusRing: { value: "{colors.olive.500}" },
        },
        forest: {
          solid: { value: "{colors.forest.500}" },
          contrast: { value: "{colors.forest.100}" },
          fg: { value: "{colors.forest.700}" },
          muted: { value: "{colors.forest.100}" },
          subtle: { value: "{colors.forest.200}" },
          emphasized: { value: "{colors.forest.300}" },
          focusRing: { value: "{colors.forest.500}" },
        },
      },
    },
  },
});
