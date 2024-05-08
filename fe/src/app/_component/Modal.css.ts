import { style } from "@vanilla-extract/css";

export const modalContainer = style({
  position:'absolute',
  top:'80%', //모달을 화면 하단에 놓기 위함
  left: '50%',
  width:'80%',
  minWidth: '320px',
  maxWidth: '432px',
  height: '15%',
  minHeight: '130px',
  maxHeight:'180px',
  padding:'10px',
  backgroundColor: "white",
  borderRadius:'10px',
  border: '1px solid lightGray',
  boxShadow:'0 2px 3px 0 rgba(0, 0, 0, 0.1)',//테두리 그림자 
  transform:'translate(-50%)', // 모달 가로축 중심으로 놓는 코드
  zIndex: '101'
});