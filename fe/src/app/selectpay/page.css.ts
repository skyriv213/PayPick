import {style} from "@vanilla-extract/css";
import {global} from "@/app/globalTheme.css";

export const container = style({
  width: '100dvw',
  maxWidth: '1280px',
  height: 'calc(100dvh - 60px)',
  backgroundColor: 'rgb(248, 249, 253)',
 });
 
export const info = style({
  display: 'flex',
  padding: '3dvh 3dvw',
  fontSize: '18px',
  fontWeight: '800',
 });

 export const payWrapper = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  justifyContent: 'space-around',
  margin: '20px 16px',
  padding: '20px 16px',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 8px',
  borderRadius: '16px',
  backgroundColor: 'white'
 });

 export const payBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '1 1 calc(33.33% - 8px)', // 3개를 한 줄에 배치하기 위한 계산
  margin: '10px 0px',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 8px',
  fontSize: '16px',
  backgroundColor: 'rgb(248, 249, 253)',
 });

 export const confirmBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '1280px',
  height: '10dvh',
  maxHeight: '120px',
  backgroundColor: global.foreground.color,
  color: 'white',
  fontSize: '25px',
  position: 'fixed',
  bottom: '0px',
 });
