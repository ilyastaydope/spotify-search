import React, {useState} from 'react'
import { FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { Box } from '@mobily/stacks'

import { useTracksInfiniteQuery } from '~/hooks/useTracksInfiniteQuery'
import { usePlaylistQuery } from '~/hooks/usePlaylistQuery'
import { Typography } from '~/components/Typography'
import { ScreenView } from '~/components/ScreenView'
import { Loader } from '~/components/Loader'
import { Track } from '~/components/Track'
import { PlaylistHeader } from '~/components/PlaylistHeader'
import { Colors } from '~/constants/Colors'

import { RootStackParamList } from '../../../types'
import {useSearchQuery} from "~/hooks/useSearchQuery";

export const PlaylistScreen = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'Playlist'>>()
  const { status: statusPlaylist, data: playlist } = usePlaylistQuery(params.id)
  const {
    status: statusTracks,
    data: dataTracks,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useTracksInfiniteQuery(params.id)

  const navigation = useNavigation()
  const isLoading = statusTracks === 'loading' || statusPlaylist === 'loading'
  const [searchQuery, setSearchQuery] = useState('');
  const { resultData } = useSearchQuery(searchQuery.toLowerCase(), dataTracks?.pages);


  return (
    <ScreenView style={{ backgroundColor: Colors.black }}>
      <TouchableOpacity style={{marginLeft: 16}} onPress={navigation.goBack}>
        <Typography color={Colors.green} size={26} >
          Back
        </Typography>
      </TouchableOpacity>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <PlaylistHeader playlist={playlist} />
          <TextInput
            placeholder="Search"
            style={styles.searchBar}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <FlatList
            data={resultData}
            refreshing={isFetchingNextPage}
            renderItem={({ item }) => {
              return <Track track={item} />
            }}
            keyExtractor={item => item.id}
            onEndReached={() => {
              hasNextPage && fetchNextPage()
            }}
            ListEmptyComponent={() => (
              <Box paddingX={2} paddingTop={6}>
                <Typography>There's no playlists</Typography>
              </Box>
            )}
          />
        </>
      )}
    </ScreenView>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    paddingHorizontal: 12,
    height: 36,
    fontSize: 26,
    borderWidth: 1,
    borderColor: 'grey',
    color: 'white',
    backgroundColor: 'black',
  }
})