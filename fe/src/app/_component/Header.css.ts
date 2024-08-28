import { style } from "@vanilla-extract/css";
import {global} from "@/app/globalTheme.css";

export const container = style({
  display: 'flex',
  justifyContent: "space-between",
  width: '100dvw',
  maxWidth: '540px',
  height: '0px',
});

export const logo = style({
  position: 'relative',
  top: '2dvh',
  height: '40px',
  padding: '4px 8px',
  marginLeft: '12px',
  border: `1px solid ${global.foreground.color}`, 
  borderRadius:'50px',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  color: global.foreground.color,
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  zIndex: '102',
  '@media': {
    '(max-width: 500px)': {
      fontSize: '20px',
    }
  }
})

export const logoText = style({
  fontSize: '24px',
  color:  global.foreground.color,
  fontWeight: 500,
})

export const menu = style({
  position: 'relative',
  height: '40px',
  top: '2dvh', 
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '12px',
  background: 'none',
  color: global.foreground.color,
  padding: '8px 14px',
  zIndex: '102',
  border: `1px solid ${global.foreground.color}`,
  borderRadius:'50px',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
})

// export const container = style({
//   display: 'flex',
//   justifyContent: "space-between",
//   width: '100dvw',
//   maxWidth: '540px',
//   height: '50px',
//   minHeight: '30px',
//   maxHeight: '50px',
//   borderBottom: '0.5px solid lightGray',
//   fontSize: '25px',
//   color: global.foreground.color,
//   '@media': {
//     '(max-width: 500px)': {
//       fontSize: '22px',
//     }
//   }
// });



// export const logo = style({
//   display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '100%',
//   marginLeft: '8px',
//   fontWeight: 500,
// })

