export const Colors = {
  white: '#fff',
  black: '#000',
  grey: '#ccc',
  dark: '#333',
  green: 'green',
} as const

type KColors = keyof typeof Colors
type TColors = typeof Colors

export type Color = TColors[KColors]
