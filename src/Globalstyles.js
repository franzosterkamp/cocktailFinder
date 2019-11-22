import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          background: #665849;
          color: #eaead5;
          font-family: "Kanit", sans-serif;
        }
      `}
    />
  );
}

// /* Color Theme Swatches in Hex */
// .Yellows-1-hex { color: #FFFF55; }
// .Yellows-2-hex { color: #FCEF87; }
// .Yellows-3-hex { color: #F5C342; }
// .Yellows-4-hex { color: #F5BD42; }
// .Yellows-5-hex { color: #F9DB49; }
