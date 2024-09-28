import {style} from "@vanilla-extract/css";
import {global} from "@/app/globalTheme.css";

export const container = style({
  position:'absolute',
  top:'76%', //모달을 화면 하단에 놓기 위함
  left: '50%',
  width:'80%',
  minWidth: '300px',
  maxWidth: '432px',
  height: '9rem',
  minHeight: '150px',
  padding:'12px',
  backgroundColor: "white",
  borderRadius:'10px',
  border: '1px solid lightGray',
  boxShadow:'0 2px 3px 0 rgba(0, 0, 0, 0.1)',//테두리 그림자 
  transform:'translate(-50%)', // 모달 가로축 중심으로 놓는 코드
  zIndex: '101',
  '@media': {
    '(max-height: 667px)': { // 아이폰se 예외 코드
      top:'68%',
    }
  }
});

export const displayModal = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  width: '100%',
  height: '100%',
});

export const info = style({
//  paddingBottom: "8px"
});

export const payInfo = style({
  display: "flex",
  justifyContent: "space-between",
  height: '20px',
});

export const buttonCss = style({
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  display: 'flex',  // flexbox 사용
  justifyContent: 'center',  // 수평 중앙 정렬
  alignItems: 'center',  // 수직 중앙 정렬
  color: global.foreground.color,
  border: `1px solid ${global.foreground.color}`,
  background: 'none',
});
