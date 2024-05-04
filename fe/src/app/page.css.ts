import {globalStyle, style} from "@vanilla-extract/css";
import {global} from "@/app/globalTheme.css";

export const container = style({
  display: 'flex',
  // flexDirection: 'row',
  flexDirection: 'column',
  backgroundColor: "white",
  width: '100dvw',
  // maxWidth: '1280px',
  // margin: '0 auto',
  // height: '100dvh',
  // '@media': {
  //   '(max-width: 1100px)': {
  //     flexDirection: 'column',
  //   }
  // }
})