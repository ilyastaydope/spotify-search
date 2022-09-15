import * as React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { Box, BoxProps, FillView, Rows, useSpacingHelpers } from '@mobily/stacks'

import { useCurrentTrack } from '~/hooks/useCurrentTrack'
import { useStacksInsets } from '~/hooks/useStacksInsets'
import { Layout } from '~/constants/Layout'

type Props = {
  readonly children: React.ReactNode
  readonly style?: StyleProp<ViewStyle>
} & BoxProps

export const ScreenView = (props: Props) => {
  const { children, style, ...rest } = props
  const { topInset, bottomInset } = useStacksInsets()
  const { divide } = useSpacingHelpers()
  const { currentTrack } = useCurrentTrack()

  const paddingBottom = currentTrack ? bottomInset + divide(Layout.playerHeight) : bottomInset

  return (
    <FillView paddingTop={topInset} paddingBottom={paddingBottom} style={style}>
      <Box flex="fluid" direction="column" style={{ width: Layout.window.width }} {...rest}>
        <Rows>{children}</Rows>
      </Box>
    </FillView>
  )
}
