import { style } from "@vanilla-extract/css";
import {global} from "@/app/globalTheme.css";

export const container = style({
  display: 'flex',
  justifyContent: "space-between",
  flexDirection: 'row',
  width: '100dvw',
  height: '5dvh',
  minHeight: '40px',
  maxHeight: '50px',
  borderBottom: '0.5px solid lightGray',
  fontSize: '25px',
  backgroundColor: "white",
  color: global.foreground.color,
});

export const logo = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  marginLeft: '8px',
  fontWeight: 500,
})

export const menu = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  background: 'none',
  color: global.foreground.color,
  width: '40px',
  height: '100%',
})

// '@media': {
//   '(max-width: 1100px)': {
//     flexDirection: 'row',
//     marginRight: '10px',
//     alignItems: 'center',
//   }
// }