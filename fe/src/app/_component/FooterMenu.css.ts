import { globalStyle, style } from "@vanilla-extract/css";
import {global} from "@/app/globalTheme.css";

export const container = style({
  display: 'flex',
  position: 'fixed',
  width: '100%',
  height: '40px',
  padding: '12px 0px',
  borderTop: '1px solid lightGray',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  zIndex: '102'
});

export const menu = style({
  display: 'flex',
  justifyContent: 'center',
  flex: 1,
  fontSize: '14px',
});

export const borderMenu = style({
  display: 'flex',
  justifyContent: 'center',
  flex: 1,
  fontSize: '14px',
  borderLeft: '1px solid lightGray',
  borderRight: '1px solid lightGray',
});