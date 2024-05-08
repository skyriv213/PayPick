import { globalStyle, style } from "@vanilla-extract/css";
import {global} from "@/app/globalTheme.css";

export const container = style({
  position: 'fixed', 
  top: '0', /* 상단에 붙임 */
  right: '0', /* 오른쪽에 붙임 */
  height: '100dvh', 
  backgroundColor: 'white', 
  transition: 'transform 0.3s ease-in-out' , /* 부드러운 애니메이션 효과 */
  transform: 'translateX(100%)', /* 기본적으로 오른쪽으로 숨김 */
  zIndex: '102',
  borderLeft: '0.5px solid lightGray',
  '@media': {
    '(min-width: 540px)': {
      right: 'calc((100dvw - 540px)/2)', // 화면의 중앙에 위치한 컨텐츠 오른쪽 끝에서 시작되도록 조정
      transform: 'translateX(1000%)',
      transition: 'none' ,
    }
  }
})

/* isOpen이 true일 때 스타일 */
export const menuOpen = style({
  transform: 'translateX(0)',
  '@media': {
    '(min-width: 540px)': {
      transform: 'none',
      transition: 'none' ,
    }
  }
});

export const closeButtonBox = style({
  display: 'flex',
  height: '5dvh',
  minHeight: '40px',
  maxHeight: '50px',
  flexDirection: 'column',
  background: 'none',
  width: '100%',
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

globalStyle(`${menuContent} li`, {
  borderBottom: '0.5px solid lightGray',
  padding: '10px',
  fontSize: '20px',
  '@media': {
    '(max-width: 800px)': {
      fontSize: '16px'
    }
  }
})