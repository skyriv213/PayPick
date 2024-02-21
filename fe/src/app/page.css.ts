import {globalStyle, style} from "@vanilla-extract/css";
import {global} from "@/app/globalTheme.css";

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: "white",
  width: '100dvw',
  height: '100dvh',
  '@media': {
    '(max-width: 1100px)': {
      flexDirection: 'column',
    }
  }
})

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: "space-between",
  width: '120px',
  height: '100dvh',
  fontSize: '25px',
  backgroundColor: "white",
  color: global.foreground.color,
  borderRight: '0.5px solid gray' ,
  '@media': {
    '(max-width: 1100px)': {
      flexDirection: 'row',
      width: '100dvw',
      height: '50px',
      borderBottom: '0.5px solid gray',
    }
  }
});

export const logo = style({
  display: 'flex',
  flexDirection: 'row',
  margin: '8px',
  fontWeight: 500,
  '@media': {
    '(max-width: 1100px)': {
      flexDirection: 'row',
      margin: '8px',

    }
  }
})

export const menu = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '0px 0px 5px 10px',
  '@media': {
    '(max-width: 1100px)': {
      flexDirection: 'row',
      marginRight: '10px',
      alignItems: 'center',
    }
  }
})