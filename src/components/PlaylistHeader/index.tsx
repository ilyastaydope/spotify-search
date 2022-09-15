import { Box, Column, Columns } from '@mobily/stacks'
import * as React from 'react'
import { Image } from 'react-native'

import { Colors } from '~/constants/Colors'
import { Typography } from '~/components/Typography'

import { styles } from './styles'

type Props = {
  readonly playlist?: Playlist
}

export const PlaylistHeader = (props: Props) => {
  const { playlist } = props

  if (!playlist) {
    return null
  }

  return (
    <Box padding={4} style={styles.root}>
      <Columns space={4}>
        <Column width="content">
          <Image
            source={{uri: playlist.images[0].url}}
            width={150}
            height={150}
            style={{ width: 150, height: 150 }}
          />
        </Column>
        <Column height="fluid">
          <Box direction="column" flex="fluid" alignY="between">
            <Box>
              <Typography size={18} weight="bold">
                {playlist.name}
              </Typography>
              <Typography color={Colors.grey}>Playlist by {playlist.owner.display_name}</Typography>
            </Box>
            <Box>
              <Typography size={12} weight="bold">
                {playlist.description}
              </Typography>
              <Typography size={12} color={Colors.grey}>
                {playlist.followers.total} followers
              </Typography>
            </Box>
          </Box>
        </Column>
      </Columns>
    </Box>
  )
}
