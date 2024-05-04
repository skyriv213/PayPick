import {assignVars, createGlobalTheme, createGlobalThemeContract, globalStyle} from "@vanilla-extract/css";

export const global = createGlobalThemeContract({
  background: {
    color: 'bg-color'
  },
  foreground: {
    color: 'fg-color'
  },
})

createGlobalTheme(':root', global, {
  background: {
    color: 'rgb(255, 255, 255)'
  },
  foreground: {
    color: 'rgb(61, 108, 229)'
  },
});

// const darkGlobalTheme = {
//   background: {
//     color: 'rgb(0, 0, 0)'
//   },
//   foreground: {
//     color: 'rgb(61, 108, 229)'
//   },
// }

// globalStyle(':root', {
//   '@media': {
//     '(prefers-color-scheme: dark)': {
//       vars: assignVars(global, darkGlobalTheme),
//     }
//   }
// })

globalStyle('*', {
  fontWeight: '600',
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
})

globalStyle('html', {
  overscrollBehavior: 'none',
  // '@media': { // 다크모드 설정시 배경 블랙으로 변경
  //   '(prefers-color-scheme: dark)': {
  //     colorScheme: 'dark',
  //   }
  // }
});

globalStyle('html, body', {
  maxWidth: '100dvw',
  overflowX: 'hidden',
})

globalStyle('body', {
  color: global.foreground.color,
  
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})

globalStyle('ul, ol', {
  listStyle: 'none',
  padding: '0',
  margin: '0',
})