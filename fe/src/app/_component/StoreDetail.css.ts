import {globalStyle, style} from "@vanilla-extract/css";

export const displayModal = style({
  width: '100%',
  height: '100%',
});

export const payInfo = style({
  padding: '5px',
  display: "flex",
  justifyContent: "space-between"
});

export const buttonCss = style({
  width: '30px',
  height: '30px',
  borderRadius: '50%'
});
