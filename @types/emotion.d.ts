import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    primary: string;
    INPUT: Style;
    BUTTON: Style;
  }

  interface Style {
    BACKGROUND: { [key: string]: string };
    COLOR: { [key: string]: string };
    BORDER: { [key: string]: string };
  }
}
