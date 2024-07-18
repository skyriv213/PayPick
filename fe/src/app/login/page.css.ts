import { globalStyle, style} from "@vanilla-extract/css";
import {global} from "@/app/globalTheme.css";

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100dvw',
  maxWidth: '540px',
  height: 'calc(100dvh - 60px)',
  padding: '40px 40px',
  backgroundColor: 'rgb(248, 249, 253)',
  justifyContent: 'center',
  
 });

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '18px',
  fontWeight: '800',
  width: '100%',
  maxWidth: '540px',
  height: 'calc(100dvh - 260px)',
  backgroundColor: 'yellowGreen',
  borderRadius: '16px',
  alignItems: 'center',
  justifyContent: 'center',
 });

 export const text = style({
  width: '100px',
  height: '100px',
  border: '1px solid black',
 });