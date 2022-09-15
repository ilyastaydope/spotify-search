import * as React from 'react'
import { Text, TextProps, TextStyle } from 'react-native'

import { Color, Colors } from '~/constants/Colors'

type Props = {
  readonly children: React.ReactNode
  readonly color?: Color
  readonly style?: TextProps['style']
  readonly align?: TextStyle['textAlign']
  readonly lines?: number
  readonly size?: number
  readonly weight?: TextStyle['fontWeight']
}

export const Typography = (props: Props) => {
  const { style, children, color, align = 'left', lines, size = 14, weight = 'normal' } = props
  const defaultColor = color ?? Colors.white

  return (
    <Text
      numberOfLines={lines}
      style={[
        style,
        {
          fontFamily: 'space-mono',
          textAlign: align,
          color: defaultColor,
          fontSize: size,
          fontWeight: weight,
        },
      ]}
    >
      {children}
    </Text>
  )
}
