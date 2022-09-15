import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Audio, AVPlaybackStatus } from 'expo-av'
import { Box, Column, Columns, Stack } from '@mobily/stacks'

import { useCurrentTrack } from '~/hooks/useCurrentTrack'
import { useStacksInsets } from '~/hooks/useStacksInsets'
import { Colors } from '~/constants/Colors'

import { Typography } from '~/components/Typography'
import { Artist } from '~/components/Artist'

import { styles } from './styles'

export const Player = () => {
  const { bottomInset } = useStacksInsets()
  const { currentTrack } = useCurrentTrack()
  const [sound, setSound] = useState<Audio.Sound | null>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(true)

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      return setIsPlaying(status.isPlaying)
    }
    setIsPlaying(false)
  }

  const playCurrentTrack = async () => {
    try {
      if (sound) {
        await sound.unloadAsync()
      }

      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: currentTrack?.preview_url || '' },
        { shouldPlay: true },
        onPlaybackStatusUpdate,
      )

      setSound(newSound)
    } catch (err) {
      console.log(err)
    }
  }

  const onPlayPausePress = async () => {
    if (!sound) {
      return
    }
    if (isPlaying) {
      await sound.pauseAsync()
    } else {
      await sound.playAsync()
    }
  }

  useEffect(() => {
    if (currentTrack) {
      playCurrentTrack()
    }
  }, [currentTrack])

  if (!currentTrack) {
    return null
  }

  return (
    <Box paddingBottom={bottomInset} style={styles.root}>
      <Box style={styles.container} alignY="center" paddingX={4}>
        <Columns space={8} alignY="center">
          <Column>
            <Stack space={2}>
              <Artist artists={currentTrack.artists} />
              <Typography lines={1}>{currentTrack.name}</Typography>
            </Stack>
          </Column>
          <Column width="content">
            <TouchableOpacity onPress={onPlayPausePress}>
              <FontAwesome name={isPlaying ? 'pause' : 'play'} size={24} color={Colors.white} />
            </TouchableOpacity>
          </Column>
        </Columns>
      </Box>
    </Box>
  )
}
