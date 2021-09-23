import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    title: string,
    colors: {
      primary: string,
      secondary: string,

      background: string,
      text: string,
  },
  }
}