import { Box } from '@mobily/stacks'
import React from 'react'
import { FlatList } from 'react-native'

import { useFeaturedPlaylistsQuery } from '~/hooks/useFeaturedPlaylistsQuery'
import { Loader } from '~/components/Loader'
import { PlaylistCard } from '~/components/PlaylistCard'
import { ScreenView } from '~/components/ScreenView'
import { Typography } from '~/components/Typography'
import { Colors } from '~/constants/Colors'

export const HomeScreen = () => {
  const { status, data } = useFeaturedPlaylistsQuery()

  // console.log(data)
  return (
    <ScreenView style={{ backgroundColor: Colors.black }}>
      <Box paddingX={2}>
        <Typography size={28} weight="bold">
          Editor's picks
        </Typography>
      </Box>
      {status === 'loading' ? (
        <Loader />
      ) : (
        <FlatList
          data={data?.playlists.items}
          renderItem={({ item }) => {
            return <PlaylistCard item={item} />
          }}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            margin: 8,
          }}
          ListEmptyComponent={() => (
            <Box paddingX={2} paddingTop={6}>
              <Typography>There's no playlists</Typography>
            </Box>
          )}
        />
      )}
    </ScreenView>
  )
}
