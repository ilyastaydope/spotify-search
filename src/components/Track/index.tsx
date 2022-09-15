import { Box, Stack } from '@mobily/stacks'
import * as React from 'react'
import {Pressable, StyleSheet} from 'react-native'
import { Artist } from '~/components/Artist'
import { Touchable } from '~/components/Touchable'
import { Typography } from '~/components/Typography'
import { Colors } from '~/constants/Colors'

import { useCurrentTrack } from '~/hooks/useCurrentTrack'
import { useFavoritesTracks} from "~/hooks/useFavoritesTracks";


type Props = {
  readonly track: Track
}

export const Track = (props: Props) => {
  const { track } = props
  const { setCurrentTrack, currentTrack } = useCurrentTrack();
  const {favorites, setFavorites} = useFavoritesTracks();

  const isDisabled = !track.preview_url
  const isCurrentTrack = track.id === currentTrack?.id

  const handlePress = React.useCallback(() => {
    setCurrentTrack({
      id: track.id,
      artists: track.artists,
      name: track.name,
      preview_url: track.preview_url,
    })
  }, [track.id]);

  const onFavoritePress = React.useCallback((id: string) => {
    if (favorites?.includes(id)){
      const newFavorites = favorites?.filter(favorite => favorite !== id)
      return setFavorites(newFavorites)
    }
    setFavorites(prevState => [...prevState, id]);

  }, [track.id, favorites]);

  return (
    <Touchable isDisabled={isDisabled} onPress={handlePress}>
      <Box padding={4} style={styles.row}>
        <Stack space={1}>
          <Typography
            lines={1}
            color={isDisabled ? Colors.dark : isCurrentTrack ? Colors.green : Colors.white}
          >
            {track.name}
          </Typography>
          <Artist color={isDisabled ? Colors.dark : Colors.grey} artists={track.artists} />
        </Stack>
        <Pressable hitSlop={20} onPress={() => onFavoritePress(track.id)}>
          <Typography
            lines={1}
            color={Colors.white}
            size={32}
          >
            {favorites?.includes(track.id) ? '★' : '☆'}
          </Typography>
        </Pressable>
      </Box>
    </Touchable>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row", alignItems: 'center', marginRight: 12
  }
})