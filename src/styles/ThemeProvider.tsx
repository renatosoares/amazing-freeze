import React, { ReactChildren, ReactChild } from 'react';
import { ThemeProvider as StyledProvider } from "styled-components";

type ThemeProviderProps = {
  children: ReactChild | ReactChildren;
}

export const ThemeNames = {
  light: "light",
  ocean: "ocean",
};

export const light = {
  colors: {
    primary: {
      main: "#ffc107",
      dark: "#c79100",
      light: "#fff350",
      text: "#212121",
    },
    danger: {
      main: "#ff3d00",
      dark: "#b22a00",
      text: "#212121",
    },
    border: "rgba(0, 0, 0, 0.125)",
  },
};

export const allThemes = {
  light,
  ocean: {
    ...light,
    colors: {
      ...light.colors,
      primary: {
        main: "#2196f3",
        dark: "#1769aa",
        light: "#4dabf5",
        text: "#fff",
      },
    },
  },
};

// FIXME - define the choice of theme
const ThemeProvider = ({ children  }: ThemeProviderProps ) => (
  <StyledProvider theme={allThemes.light}>{children}</StyledProvider>
);

export default ThemeProvider;
