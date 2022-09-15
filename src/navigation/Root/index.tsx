import * as React from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ColorSchemeName } from 'react-native'

import { HomeScreen } from '~/screens/HomeScreen'
import { PlaylistScreen } from '~/screens/PlaylistScreen'

import { RootStackParamList } from '../../../types'
import { navigationRef } from '../utils'

type Props = {
  readonly colorScheme: ColorSchemeName
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Playlist" component={PlaylistScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export const Navigation = (props: Props) => {
  const { colorScheme } = props
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}
