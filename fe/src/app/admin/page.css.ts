import {style} from "@vanilla-extract/css";
import {global} from "@/app/globalTheme.css";

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: "white",
  width: '100%',
  height: 'calc(100dvh - 60px)'
})

export const box = style({
  padding: '4px 8px',
  width: 'calc(100%-8px)',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 8px',
  border: '1px solid lightGray',
  borderRadius: '8px',
  margin: '4px 4px 0px 4px',
})

export const errorBox = style({
  padding: '8px',
  backgroundColor: 'white',
  width: '100%',
  fontSize: '17px',
  color: global.foreground.color,
 });

export const inputBox = style({
  margin: '4px 0px',
  padding: '8px',
  border: '0.5px solid lightGray',
  // boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 8px',
  borderRadius: '8px',
  backgroundColor: 'white',
  width: '100%',
  height: '35px',
  fontSize: '14px',
  color: global.foreground.color,
  selectors: {
    '&::placeholder': {
      color: global.foreground.color,
      opacity: 0.5,
    },
  },
 });

 export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'space-between'
 });

 export const buttonBox = style({
  display: 'flex',
  justifyContent: 'flex-end'
 });

 export const dataButton = style({
  padding: '8px',
  margin: '4px',
  borderRadius: '8px',
  textAlign: 'center',
  color: 'white',
  background: global.foreground.color,
 });

 export const errorComponent = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100dvh'
 })