import {globalStyle, style} from "@vanilla-extract/css";
// import {global} from "@/app/globalTheme.css";

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'gray',
  width: '100px',
  height: '100px'
})

export const center = style({
  width: '390px',
  height: '100px',
  backgroundColor: 'white',
  color: 'black'
});