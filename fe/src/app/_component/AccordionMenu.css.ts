import { globalStyle, style } from "@vanilla-extract/css";
import {global} from "@/app/globalTheme.css";

export const container = style({
  position: 'fixed', 
  top: '0', /* 상단에 붙임 */
  right: '0', /* 오른쪽에 붙임 */
  // width: '40%', 
  // maxWidth: '300px',
  fontSize: '24px',
  height: '100dvh', 
  backgroundColor: 'white', 
  transition: 'transform 0.3s ease-in-out' , /* 부드러운 애니메이션 효과 */
  transform: 'translateX(100%)', /* 기본적으로 오른쪽으로 숨김 */
  zIndex: '1',
  borderLeft: '0.5px solid lightGray',
  '@media': {
    '(max-width: 600px)': {
      fontSize: '20px',
    }
  }
})

/* isOpen이 true일 때 스타일 */
export const menuOpen = style({
  transform: 'translateX(0)',
});

export const closeButtonBox = style({
  display: 'flex',
  height: '5dvh',
  minHeight: '40px',
  maxHeight: '50px',
  flexDirection: 'column',
  background: 'none',
  // borderBottom: '0.5px solid lightGray',
  width: '100%',
  // paddingRight: '10px',
  justifyContent: "center",
  alignItems: 'flex-end',
  color: global.foreground.color,
});

export const closeButton = style({
  display: 'flex',
  fontSize: '24px',
  height: '100%',
  background: 'none',
  border: 'none',
  paddingRight: '8px',
  justifyContent: 'flex-end',
  alignItems: 'center',
  color: global.foreground.color,
});

export const menuContent = style({
  
})

// export const li = style({
//    /* 목록 스타일 */
//    selectors: {'li': {
//    border: '0.5px solid lightGray'
//   }}
// })

globalStyle(`${menuContent} li`, {
  borderBottom: '0.5px solid lightGray',
  padding: '10px'
})