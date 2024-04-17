import { style } from "@vanilla-extract/css";

export const container = style({
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