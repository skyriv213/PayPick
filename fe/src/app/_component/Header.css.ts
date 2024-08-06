import { style } from "@vanilla-extract/css";
import {global} from "@/app/globalTheme.css";

export const container = style({
  display: 'flex',
  justifyContent: "space-between",
  width: '100dvw',
  maxWidth: '540px',
  height: '5dvh',
  minHeight: '30px',
  maxHeight: '50px',
  borderBottom: '0.5px solid lightGray',
  fontSize: '25px',
  backgroundColor: "white",
  color: global.foreground.color,
  '@media': {
    '(max-width: 500px)': {
      fontSize: '22px',
    }
  }
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