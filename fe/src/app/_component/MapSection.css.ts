import {globalStyle, style} from "@vanilla-extract/css";

export const displayModal = style({
  // display: "flex",
  position: 'fixed',
  bottom: '50px',
  width: '100px',
  height: '100px',
  backgroundColor: "white",
  borderRadius: '10px',
  padding: '20px',
  zIndex:'1000',
});

export const map = style({
  width: '100dvh',
  height: '100dvh'
});
