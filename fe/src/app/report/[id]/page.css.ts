import { globalStyle, style, styleVariants} from "@vanilla-extract/css";
import {global} from "@/app/globalTheme.css";

export const container = style({
  width: '100dvw',
  maxWidth: '540px',
  height: 'calc(100dvh - 50px)',
  backgroundColor: 'rgb(248, 249, 253)',
  alignItems: 'center',
  justifyContent: 'center',
 });

export const info = style({
  display: 'flex',
  padding: '84px 20px 16px 20px',
  fontSize: '18px',
  fontWeight: '800',
 });

export const payWrapper = style({
  display:"flex",
  flexDirection: 'column',
  alignItems: 'center',
  margin: '20px 16px',
  padding: '20px 16px',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 8px',
  borderRadius: '16px',
  backgroundColor: 'white'
 });

globalStyle(`${payWrapper} li`, {
  fontSize: '20px',
  width: '100%',
  '@media': {
    '(max-width: 800px)': {
      fontSize: '16px'
    }
  }
 })

export const input = style({
  marginTop: '8px',
  marginBottom: '20px',
  padding: '8px',
  border: '0.5px solid lightGray',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 8px',
  borderRadius: '8px',
  backgroundColor: 'white',
  width: '100%',
  height: '36px',
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
  marginBottom: '48px',
  backgroundColor: 'white',
  width: '100%',
  height: '36px',
  fontSize: '16px',
  color: global.foreground.color,
 });

 export const confirmBox = style({
  width: '540px',
  alignItems: 'center',
  justifyContent: 'center',
 });

export const confirmButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100px',
  maxWidth: '540px',
  width: '100%',
  height: '8dvh',
  maxHeight: '120px',
  fontSize: '20px',
  backgroundColor: global.foreground.color,
  color: '#fff',
  '@media': {
    '(max-width: 540px)': {
      fontSize: '16px'
    }
  }
 });

 export const confirmButtonVariants = styleVariants({
  enabled: {
    backgroundColor: global.foreground.color,
    color: '#fff',
  },
  disabled: {
    backgroundColor: '#ccc',
    color: '#666',
    cursor: 'not-allowed',
  },
});
