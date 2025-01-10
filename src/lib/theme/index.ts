import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

export const colors = {
  brand: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
  },
  navy: {
    50: "#f0f4f8",
    100: "#d9e2ec",
    200: "#bcccdc",
    300: "#9fb3c8",
    400: "#829ab1",
    500: "#627d98",
    600: "#486581",
    700: "#334e68",
    800: "#243b53",
    900: "#102a43",
  },
};

export const theme = extendTheme({
  config,
  colors,
  styles: {
    global: (props) => ({
      body: {
        bg: mode("gray.50", "gray.900")(props),
        color: mode("gray.800", "whiteAlpha.900")(props),
      },
    }),
  },
});