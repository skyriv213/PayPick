import { globalStyle, style} from "@vanilla-extract/css";
import {global} from "@/app/globalTheme.css";

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100dvw',
  height: 'calc(100dvh - 40px)',
  padding: '40px 40px',
  backgroundColor: 'rgb(248, 249, 253)',
  justifyContent: 'center',
 });