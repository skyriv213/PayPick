import {globalStyle, style} from "@vanilla-extract/css";

export const displayModal = style({
  position: 'fixed',
  bottom: '50px',
  width: '100px',
  height: '100px',
  backgroundColor: "white",
  borderRadius: '10px',
});

export const map = style({
  width: '100dvh',
  height: '100dvh'
});
