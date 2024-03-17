import type { AttributifyAttributes } from 'unocss/preset-attributify'

declare module 'vue' {
  interface HTMLAttributes extends AttributifyAttributes {}
}
