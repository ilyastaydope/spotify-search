import * as React from 'react'
import { Image, TouchableOpacity } from 'react-native'

import { Colors } from '~/constants/Colors'
import { Layout } from '~/constants/Layout'
import { goTo } from '~/navigation/utils'

type Props = {
  readonly item: Playlist
}

const imageSize = (Layout.window.width - 40) / 2

export const PlaylistCard = (props: Props) => {
  const { item } = props

  const handlePress = React.useCallback(() => {
    goTo('Playlist', { id: item.id })
  }, [item.id])

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{ width: imageSize, height: imageSize }}
    >
      <Image
        source={{ uri: item.images[0].url}}
        width={imageSize}
        height={imageSize}
        style={{ width: imageSize, height: imageSize, resizeMode: 'contain' }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  )
}
