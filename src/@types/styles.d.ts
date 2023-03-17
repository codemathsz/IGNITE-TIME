// d.ts quer dizer que só teremos código de definição de tipo e só pode ter código totalmente typescript
import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
} // criando uma tipagem para o modulo do styled-components do npm, toda fez que importamos a tipagem que vai puxar é o que definimos aqui
