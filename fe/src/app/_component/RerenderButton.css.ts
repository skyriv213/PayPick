import {style} from "@vanilla-extract/css";
import {global} from "@/app/globalTheme.css";

export const secondContainer = style({
    position:'absolute',
    top:'70px',
    left: '50%',
    transform:'translate(-50%)', // 모달 가로축 중심으로 놓는 코드
    zIndex: '101'
 });

 export const displayModal = style({
  width: '130px',
  height: '30px',
  backgroundColor: 'white',
  color: global.foreground.color,
  border: `1px solid ${global.foreground.color}`,
  boxShadow:'0 2px 3px 0 rgba(0, 0, 0, 0.1)',//테두리 그림자 
  borderRadius:'50px',
  ':active': {
    /* 클릭될 때 적용할 스타일 */
    backgroundColor: 'lightGray',
  },
});