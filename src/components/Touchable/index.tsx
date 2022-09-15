import * as React from 'react'
import { TouchableOpacity, TouchableOpacityProps, ViewProps } from 'react-native'

export type Props = {
  readonly onPress?: TouchableOpacityProps['onPress']
  readonly style?: ViewProps['style']
  readonly children: React.ReactNode
  readonly isDisabled?: boolean
  readonly activeOpacity?: number
}

export const Touchable = (props: Props) => {
  const { onPress, style, children, isDisabled = false, activeOpacity = 0.75 } = props

  const handlePress = React.useCallback(
    e => {
      !isDisabled && onPress?.(e)
    },
    [isDisabled],
  )

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={isDisabled ? 1 : activeOpacity}
      style={style}
    >
      {children}
    </TouchableOpacity>
  )
}
