import { globalStyle, style } from "@vanilla-extract/css";
import {global} from "@/app/globalTheme.css";

export const container = style({
  display: 'flex',
  width: '100%',
  height: '5dvh',
  background: 'light',
  borderTop: '0.5px solid lightGray',
});

export const menu = style({
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: "center",
  fontSize: '14px',
  lineHeight: '2.8',
  height: '100%',
  flex: 1
});