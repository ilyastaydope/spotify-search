/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ImageSourcePropType } from 'react-native'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }

  type Playlist = {
    id: string
    description: string
    images: {url: string
  }[]
  followers: {
    total: number
  }
  name: string
  owner: {
    display_name: string
  }
}

type Artist = {
  id: string
  name: string
}

type Track = {
  artists: Artist[]
  id: string
  name: string
  preview_url: string
}
}

export type RootStackParamList = {
  Home: undefined
  Playlist: { id: string }
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>
