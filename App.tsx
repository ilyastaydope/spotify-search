import { StatusBar } from 'expo-status-bar'
import { LogBox } from 'react-native'
import { Player } from '~/components/Player'

import { useCachedResources } from '~/hooks/useCachedResources'
import { useColorScheme } from '~/hooks/useColorScheme'
import { Navigation } from '~/navigation/Root'
import { Providers } from '~/providers'

LogBox.ignoreLogs([
  'Setting a timer',
]);

const App = () => {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  }

  return (
    <Providers>
      <StatusBar />
      <Navigation colorScheme={colorScheme} />
      <Player />
    </Providers>
  )
}

export default App
