import { globalStyle, style} from "@vanilla-extract/css";
import {global} from "@/app/globalTheme.css";

export const container = style({
  width: '100dvw',
  maxWidth: '540px',
  height: 'calc(100dvh - 60px)',
  backgroundColor: 'rgb(248, 249, 253)',
 });

export const info = style({
  display: 'flex',
  marginTop: '16px',
  padding: '16px 20px',
  fontSize: '18px',
  fontWeight: '800',
 });

export const payWrapper = style({
  margin: '20px 16px',
  padding: '20px 16px',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 8px',
  borderRadius: '16px',
  backgroundColor: 'white'
 });

globalStyle(`${payWrapper} li`, {
  paddingBottom: '16px',
  fontSize: '20px',
  '@media': {
    '(max-width: 800px)': {
      fontSize: '16px'
    }
  }
 })

export const inputBox = style({
  marginTop: '8px',
  padding: '8px',
  border: '0.5px solid lightGray',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 8px',
  borderRadius: '8px',
  backgroundColor: 'white',
  width: '100%',
  height: '35px',
  fontSize: '14px',
  color: global.foreground.color,
  selectors: {
    '&::placeholder': {
      color: global.foreground.color,
      opacity: 0.7,
    },
  },
 });

export const otherBox= style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '16px',
  marginBottom: '12px',
  backgroundColor: 'white',
  width: '100%',
  height: '35px',
  fontSize: '16px',
  color: global.foreground.color,
 });

export const confirmBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  maxWidth: '540px',
  width: '100%',
  height: '10dvh',
  maxHeight: '120px',
  backgroundColor: global.foreground.color,
  color: 'white',
  fontSize: '25px',
  position: 'fixed',
  bottom: '0px',
 });

 

 