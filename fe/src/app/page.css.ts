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