import { FillView } from '@mobily/stacks'
import * as React from 'react'
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native'

import { Color, Colors } from '~/constants/Colors'

type Props = {
  readonly size?: ActivityIndicatorProps['size']
  readonly color?: Color
}

export const Loader = (props: Props) => {
  const { color, size = 'small' } = props
  const defaultColor = color ?? Colors.white

  return (
    <FillView alignY="center" alignX="center">
      <ActivityIndicator size={size} color={defaultColor} />
    </FillView>
  )
}
