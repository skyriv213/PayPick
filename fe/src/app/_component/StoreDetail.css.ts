import {style} from "@vanilla-extract/css";

export const displayModal = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: '100%',
  height: '100%',
  padding: '5px',
});

export const info = style({
 paddingBottom: "10px"
});

export const payInfo = style({
  // padding: '5px',
  display: "flex",
  justifyContent: "space-between"
});

export const buttonCss = style({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  border: 'none',
  color: 'gray'
});
