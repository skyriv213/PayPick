import {style} from "@vanilla-extract/css";
import {global} from "@/app/globalTheme.css";

export const container = style({
    position:'absolute',
    top:'70px',
    left: '50%',
    transform:'translate(-50%)',
    zIndex: '101'
 });

 export const displayModal = style({
  width: '130px',
  height: '30px',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  color: global.foreground.color,
  border: `1px solid ${global.foreground.color}`,
  boxShadow:'0 2px 3px 0 rgba(0, 0, 0, 0.1)', 
  borderRadius:'50px',
  ':active': {
    /* 클릭될 때 적용할 스타일 */
    backgroundColor: 'lightGray',
  },
});